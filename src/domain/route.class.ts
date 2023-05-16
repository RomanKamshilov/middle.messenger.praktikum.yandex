import {Block} from './block.class';

function render(rootId: string, block: Block) {
    const root = document.getElementById(rootId);
    root!.appendChild(block.getContent());
    return root;
}
 
export class Route {
    readonly guardFn: () => Promise<string | true>;
    private readonly blockClass;
    private readonly props;
    private readonly pathname;
    private block: Block | null = null;

    constructor(pathname, view, props, guardFn) {
        this.pathname = pathname;
        this.blockClass = view;
        this.block = null;
        this.props = props;
        this.guardFn = guardFn;
    }

    navigate(pathname) {
        if (this.match(pathname)) {
            this.render();
        }
    }

    leave() {
        if (this.block) {
            this.block.hide();
        }
    }

    match(pathname) {
        return pathname === this.pathname;
    }

    render() {
        if (!this.block) {
            this.block = new this.blockClass();
            render(this.props.rootQuery, this.block);
            return;
        }
        this.block.show();
    }
}
