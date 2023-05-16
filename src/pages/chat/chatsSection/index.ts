import tpl from './tpl.hbs';
import './style.css';
import * as arrowRight from '../../../../static/arrowRight.svg';
import {InputSearch} from "../../../components/inputSearch";
import {ChatItem} from "./chatsItem";
import {Block} from "../../../domain";

export interface DataChatSection {
    profile: string;
    type: string;
    valueButton: string;
    arrowRight: typeof arrowRight;
    inputSearchComponent: InputSearch;
    chatItem: ChatItem;
}

const dataChatSection = {
    profile: 'Профиль',
    type: 'button',
    valueButton: '',
    arrowRight: arrowRight,
    inputSearchComponent: new InputSearch(),
    chatItem: new ChatItem(),
}

export class ChatsSection extends Block<DataChatSection> {
    constructor(props: DataChatSection = dataChatSection) {
        super(tpl, props);
    }
}

