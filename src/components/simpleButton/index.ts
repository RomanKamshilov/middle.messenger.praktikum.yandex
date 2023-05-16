import tpl from './tpl.hbs';
import './style.css';
import {Block} from "../../domain";

interface SimpleButtons {
    name: string;
    type: string;
}

export class SimpleButton extends Block<SimpleButtons> {
    constructor(props: SimpleButtons) {
        super(tpl, props);
    }
}


