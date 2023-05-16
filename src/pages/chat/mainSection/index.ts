import tpl from './tpl.hbs';
import './style.css';
import {Chat} from './chat/index';
import {NoChat} from "./noChat/index";
import {Block} from "../../../domain";

interface ComponentsMainSection {
    chat: Chat;
    noChat: NoChat;
}
 
const components: ComponentsMainSection = {
    chat: new Chat(),
    noChat: new NoChat()
};

export class MainSection extends Block<ComponentsMainSection> {
    constructor(props: ComponentsMainSection = components) {
        super(tpl, props);
    }
}
