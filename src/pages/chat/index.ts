import tpl from './tpl.hbs';
import './style.css';
import {ChatsSection} from "./chatsSection";
import {MainSection} from "./mainSection";
import {Block} from "../../domain";

interface ComponentsChatPage {
    chatsSection: ChatsSection;
    mainSection: MainSection;
}

export const components = {
    chatsSection: new ChatsSection(),
    mainSection: new MainSection(),
}

export class ChatPage extends Block<ComponentsChatPage> {
    constructor(props: ComponentsChatPage = components) {
        super(tpl, props);
    }
}
