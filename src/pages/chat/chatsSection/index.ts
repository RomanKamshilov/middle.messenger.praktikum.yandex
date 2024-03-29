import tpl from './tpl.hbs';
import './style.css';
import * as arrowRight from '../../../../static/arrowRight.svg';
import inputSearchComponent from "../../../components/inputSearch";
import chatItem from "./chatsItem";

interface DataChatSection {
    profile: string;
    type: string;
    valueButton: string;
    arrowRight: typeof arrowRight;
    inputSearchComponent: () => string;
    chatItem: () => string;
}

const data: DataChatSection = {
    profile: 'Профиль',
    type: 'button',
    valueButton: '',
    arrowRight: arrowRight,
    inputSearchComponent,
    chatItem,
}

const chatsSection = () => {
    return tpl(data);
}

export default chatsSection;
