import tpl from './tpl.hbs';
import './style.css';
import {Block} from '../../domain';
import {INDEX_DATA} from '../../constants/index-data.const';

export class IndexPage extends Block {
    constructor() {
        super(tpl, {pages: INDEX_DATA.pages});
    }
}

