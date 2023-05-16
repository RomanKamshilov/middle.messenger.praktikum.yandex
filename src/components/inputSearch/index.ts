import tpl from './tpl.hbs';
import './style.css';
import * as searchIcon from '/static/search.svg';
import {Block} from "../../domain";

interface InputSearchProps {
    value?: string;
    type?: string;
    searchIcon?: typeof searchIcon;
}

const dataInputSearch = {
    value: 'Поиск',
    type: 'text',
    searchIcon,
}


export class InputSearch extends Block<InputSearchProps> {
    constructor(props: InputSearchProps = dataInputSearch) {
        super(tpl, props);
    }
}
