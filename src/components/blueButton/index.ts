import tpl from './tpl.hbs';
import './style.css';
import {Block} from '../../domain';


interface ButtonProps {
    label?: string;
}

export class BlueButton extends Block<ButtonProps> {
    constructor(props: ButtonProps) {
        super(tpl, props);
    }
}
