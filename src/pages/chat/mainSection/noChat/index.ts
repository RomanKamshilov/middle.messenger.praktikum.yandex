import tpl from './tpl.hbs';
import './style.css';
import {Block} from "../../../../domain";

interface DataNoChat {
    text: string;
}

const dataNoChat = {
    text: 'Выберите чат чтобы отправить сообщение',
};

export class NoChat extends Block<DataNoChat> {
    constructor(props: DataNoChat = dataNoChat) {
        super(tpl, props);
    }
}

