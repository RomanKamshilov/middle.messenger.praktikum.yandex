import tpl from './tpl.hbs';
import './style.css';
import {Page500Data} from "../../pages/500";
import {Page404Data} from "../../pages/400";
import {Block} from "../../domain";

export class ErrorPage extends Block<Page500Data | Page404Data | string> {
    constructor(props: Page500Data | Page404Data | string) {
        super(tpl, props);
    }
}

