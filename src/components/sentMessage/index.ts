import tpl from './tpl.hbs';
import './style.css';
import * as checkSvg from '../../../static/checkSvg.svg';
import {Block} from "../../domain";

interface SentMessageProps {
    text?: string;
    check?: typeof checkSvg;
    time?: string;
}

const dataSentMessage = {
    text: 'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
    check: checkSvg,
    time: '12:55',
};

export class SentMessage extends Block<SentMessageProps> {
    constructor(props: SentMessageProps = dataSentMessage) {
        super(tpl, props);
    }
}
