import tpl from './tpl.hbs';
import './style.css';
import * as noAvatar from '../../../static/noAvatar.svg';
import {Block} from "../../../domain";
import {InputSettings} from "../../../components/inputSettings";
import {SimpleButton} from "../../../components/simpleButton";

interface DataMainSectionProps {
    noAvatar?: typeof noAvatar;
    name?: string;
    normal?: boolean;
    buttonSettings?: Block;
    input?: InputSettings;
    change?: boolean;
    inputChange?: InputSettings;
    changePassword?: boolean;
    inputsChangePassword?: InputSettings;
    simpleButton?: SimpleButton;
}

export class MainSection extends Block<DataMainSectionProps> {
    constructor(props: DataMainSectionProps) {
        super(tpl, props);
    }
}

