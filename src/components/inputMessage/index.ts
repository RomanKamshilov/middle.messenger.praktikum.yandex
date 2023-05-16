import tpl from './tpl.hbs';
import './style.css';
import {Block} from "../../domain";

interface InputMessageProps {
    value?: string;
    type?: string;
}

const dataInputMessage = {
    value: 'Сообщение',
    type: 'text',
};

export class InputMessage extends Block<InputMessageProps> {
    constructor(props: InputMessageProps = dataInputMessage) {
        super(tpl, props);
    }
}
