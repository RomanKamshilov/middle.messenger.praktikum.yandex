import tpl from './tpl.hbs';
import './style.css';
import {DataPersons, dataPersons} from './data';
import {Block} from "../../../../domain";

export class ChatItem extends Block<DataPersons> {
    constructor(props: DataPersons = dataPersons) {
        super(tpl, props);
    }
}
