import tpl from './tpl.hbs';
import './style.css'
import {IncomingMessage} from "../../../../components/incomingMessage";
import {PhotoMessage} from "../../../../components/photoMessage";
import * as settings from '../../../../../static/settingsDots.svg';
import * as clip from '../../../../../static/clip.svg';
import * as sentArrow from '../../../../../static/sentArrow.svg';
import * as noAvatar from '../../../../../static/noAvatar.svg';
import {SentMessage} from "../../../../components/sentMessage";
import {InputMessage} from "../../../../components/inputMessage";
import {Block} from "../../../../domain";

interface DataChat {
    photo?: boolean;
    noAvatar?: typeof noAvatar;
    name?: string;
    settingsSvg?: typeof settings;
    date?: string;
    clipSvg?: typeof clip;
    sent?: typeof sentArrow;
    incomingMessage?: IncomingMessage;
    photoMessage?: PhotoMessage;
    sentMessage?: SentMessage;
    inputMessage?: InputMessage;
}

const chatData: DataChat = {
    photo: false,
    noAvatar: noAvatar,
    name: 'Вадим',
    settingsSvg: settings,
    date: '7 january',
    clipSvg: clip,
    sent: sentArrow,
    incomingMessage: new IncomingMessage(),
    photoMessage: new PhotoMessage(),
    sentMessage: new SentMessage(),
    inputMessage: new InputMessage(),
};

export class Chat extends Block<DataChat> {
    constructor(propsAndChildren: DataChat = chatData) {
        super(tpl, propsAndChildren);
    }
}
