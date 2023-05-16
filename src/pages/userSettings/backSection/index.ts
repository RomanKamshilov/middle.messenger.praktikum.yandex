import tpl from './tpl.hbs';
import './style.css';
import * as backArrow from '../../../../static/backArrow.svg';
import {Block} from "../../../domain";

interface ComponentBack {
    backArrow: typeof backArrow;
}

const dataBackArrow = {
    backArrow
};

export class BackArrow extends Block<ComponentBack> {
    constructor(props: ComponentBack = dataBackArrow) {
        super(tpl, props);
    }
}
