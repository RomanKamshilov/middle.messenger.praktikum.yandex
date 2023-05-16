import tpl from './tpl.hbs';
import './style.css';
import {Block} from "../../domain";

interface Input {
    label: string;
    name: string;
    value: string;
    type: string;
    disable: boolean;
}

interface Inputs {
    inputs: Input[];
}

interface InputsChange {
    inputsChange: Input[];
}

interface InputsChangePassword {
    inputsChangePassword: Input[];
}

export class InputSettings extends Block<Inputs | InputsChange | InputsChangePassword> {
    constructor(props: Inputs | InputsChange | InputsChangePassword) {
        super(tpl, props);
    }
}
