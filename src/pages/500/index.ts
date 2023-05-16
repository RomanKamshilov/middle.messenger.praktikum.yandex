import tpl from './tpl.hbs';
import './style.css';
import {HrefReg} from "../../components/hrefReg";
import {ErrorPage} from "../../components/errorPage";
import {Block} from "../../domain";

export interface Page500Data {
    number: string;
    title: string;
    hrefReg: HrefReg;
}

const page500Data: Page500Data = {
    number: '500',
    title: 'Упс... Уже устраняем!',
    hrefReg: new HrefReg({href: 'chat', value: 'Назад к чатам'}),
};

export interface Component500 {
    errorPage: ErrorPage;
}

export const component500 = {
    errorPage: new ErrorPage(page500Data),
}

export class Page500 extends Block<Component500> {
    constructor(props: Component500 = component500) {
        super(tpl, props);
    }
}
