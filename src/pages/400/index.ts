import tpl from './tpl.hbs';
import './style.css';
import {HrefReg} from "../../components/hrefReg";
import {ErrorPage} from "../../components/errorPage";
import {Block} from "../../domain";

export interface Page404Data {
    number: string;
    title: string;
    hrefReg: HrefReg;
}

const page404Data: Page404Data = {
    number: '404',
    title: 'Не туда попали',
    hrefReg: new HrefReg({href: 'chat', value: 'Назад к чатам'}),
};

export interface Component400 {
    errorPage: ErrorPage;
}

export const component400: Component400 = {
    errorPage: new ErrorPage(page404Data),
};

export class Page400 extends Block<Component400> {
    constructor(props: Component400 = component400) {
        super(tpl, props);
    }
}

