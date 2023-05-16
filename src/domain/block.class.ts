import {BlockEvent} from './events.enum';
import {EventBus} from './event-bus.class';
import {uuidGenerator} from '../utils/uuid-generator.utils';
import {isEqual} from "../utils/helpers";

interface BlockMeta<Props extends Object> {
    tagName: string;
    props: Props | {};
}

type Element = any;
type EventCallback = (...args: any[]) => void;

export class Block<Props extends Object = any> {
    props: Props;
    readonly children: { [key: string]: Block };
    private readonly id: string = uuidGenerator();
    private readonly tplCompile: (params: any) => string;
    private readonly eventBus = new EventBus();
    private readonly _meta: BlockMeta<Props>;
    private events: { [key: string]: EventCallback } = {};

    constructor(tplCompile: (params: any) => string, propsAndChildren: Props, tagName = 'div') {
        const {children, props} = this.getChildren(propsAndChildren);

        this.tplCompile = tplCompile;
        this.props = this._makePropsProxy(props);
        this.children = children;
        this._meta = {
            tagName,
            props
        };

        this._registerEvents(this.eventBus);

        this.eventBus.emit(BlockEvent.INIT);
    }

    private _element: Element = null;

    get element(): Element {
        return this._element;
    }

    _registerEvents(eventBus: EventBus): void {
        eventBus.on(BlockEvent.INIT, this.init.bind(this));
        eventBus.on(BlockEvent.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(BlockEvent.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(BlockEvent.FLOW_RENDER, this._render.bind(this));
    }

    _createResources(): void {
        const {tagName} = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init(): void {
        this._createResources();
        this.eventBus.emit(BlockEvent.FLOW_CDM);
    }

    _componentDidMount(): void {
        this.componentDidMount(undefined);
        this.eventBus.emit(BlockEvent.FLOW_RENDER);
    }

    componentDidMount(oldProps: Props): void {

    }

    dispatchComponentDidMount(): void {
        this.eventBus.emit(BlockEvent.FLOW_CDM)
    }

    _componentDidUpdate(oldProps: Props, newProps: Props): void {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this.eventBus.emit(BlockEvent.FLOW_RENDER);
        }
    }

    componentDidUpdate(oldProps: Props, newProps: Props): boolean {
        if (!isEqual(oldProps, newProps)) {
            return true;
        }
    }

    setProps = (nextProps: Props): void => {
        if (!nextProps) {
            return;
        }

        this.props = {...this.props, ...nextProps};
        this.eventBus.emit(BlockEvent.FLOW_CDU);
    };

    _addEvents(): void {
        const {events = {}} = this.props;

        Object.entries(events).forEach(([eventName, eventHandler]) => {
            this._element.firstElementChild.addEventListener(eventName, eventHandler);
        });
    }

    _removeEvents(): void {
        const {events = {}} = this.props;

        Object.entries(events).forEach(([eventName, eventHandler]) => {
            this._element.firstElementChild?.removeEventListener(eventName, eventHandler);
        });
    }

    _render(): void {
        this._removeEvents();
        const block = this.render();
        this._element.innerHTML = '';
        this._element.appendChild(block);
        this._addEvents();
    }

    render(): any {
        const renderChildren = {};

        Object.entries(this.children).forEach(([key, child]) => {
            renderChildren[key] = `<div data-id="${child.id}"></div>`
        });

        const fragment = this._createDocumentElement('template');

        fragment.innerHTML = this.tplCompile({...this.props, ...renderChildren});

        Object.values(this.children).forEach(child => {
            const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

            if (stub) {
                stub.replaceWith(child.getContent());
            }

        });

        return fragment.content;
    }

    getContent() {
        return this.element;
    }


    _makePropsProxy(props: Props) {
        const propsHandler: any = {
            deleteProperty(target, prop) {
                throw new Error('нет доступа');
            }
        };

        return new Proxy(props, propsHandler);
    }

    _createDocumentElement(tagName: string) {
        return document.createElement(tagName);
    }

    show(): void {
        this._element.style.display = 'block';
    }

    hide(): void {
        this._element.style.display = 'none';
    }

    destroy(): void {
        this._removeEvents();
    }

    private getChildren(propsAndChildren: Props) {
        const children = {};
        const props = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return {children, props};
    }
}
