import tpl from './tpl.hbs';
import './style.css';
import {BackArrow} from "./backSection";
import {MainSection} from "./mainSection";
import {ButtonSettings} from "../../components/buttonSettings";
import * as noAvatar from '../../../static/noAvatar.svg';
import {InputSettings} from "../../components/inputSettings";
import {SimpleButton} from "../../components/simpleButton";
import {Block} from "../../domain";

const buttons = {
    buttons: [
        {
            name: 'Изменить данные',
            color: '#3369F3',
            href: '/userSettings'
        },
        {
            name: 'Изменить пароль',
            color: '#3369F3',
            href: '/userSettings'
        },
        {
            name: 'Выйти',
            color: '#FF0000',
            href: '/'
        },
    ]
};

const simpleButtons = {
    name: 'Сохранить',
    type: 'submit',
}

const inputs = {
    inputs: [
        {
            label: 'Почта',
            name: 'email',
            value: 'pochta@yandex.ru',
            type: 'text',
            disable: true,
        },
        {
            label: 'Логин',
            name: 'login',
            value: 'VadimVadimich',
            type: 'text',
            disable: true,
        },
        {
            label: 'Имя',
            name: 'first_name',
            value: 'Вадим',
            type: 'text',
            disable: true,
        },
        {
            label: 'Фамилия',
            name: 'second_name',
            value: 'Вадимов',
            type: 'text',
            disable: true,
        },
        {
            label: 'Имя в чате',
            name: 'display_name',
            value: 'Вадимыч',
            type: 'text',
            disable: true,
        },
        {
            label: 'Телефон',
            name: 'phone',
            value: '+7 (777) 777-77-77',
            type: 'text',
            disable: true,
        },
    ]
}

const inputsChange = {
    inputsChange: [
        {
            label: 'Почта',
            name: 'email',
            value: 'pochta@yandex.ru',
            type: 'text',
            disable: false,
        },
        {
            label: 'Логин',
            name: 'login',
            value: 'VadimVadimich',
            type: 'text',
            disable: false,
        },
        {
            label: 'Имя',
            name: 'first_name',
            value: 'Вадим',
            type: 'text',
            disable: false,
        },
        {
            label: 'Фамилия',
            name: 'second_name',
            value: 'Вадимов',
            type: 'text',
            disable: false,
        },
        {
            label: 'Имя в чате',
            name: 'display_name',
            value: 'Вадимыч',
            type: 'text',
            disable: false,
        },
        {
            label: 'Телефон',
            name: 'phone',
            value: '+7 (777) 777-77-77',
            type: 'text',
            disable: false,
        },
    ],
};

const inputsChangePassword = {
    inputsChangePassword: [
        {
            label: 'Старый пароль',
            name: 'oldPassword',
            value: 'oldPassword123',
            type: 'password',
            disable: false,
        },
        {
            label: 'Новый пароль',
            name: 'newPassword',
            value: 'newPassword123',
            type: 'password',
            disable: false,
        },
        {
            label: 'Повторите новый пароль',
            name: 'newPassword',
            value: 'newPassword123',
            type: 'password',
            disable: false,
        },
    ],
};

const dataMainSection = {
    photo: false,
    noAvatar: noAvatar,
    name: 'Вадим',
    normal: true,
    buttonSettings: new ButtonSettings(buttons),
    input: new InputSettings(inputs),
    change: false,
    inputChange: new InputSettings(inputsChange),
    changePassword: false,
    inputsChangePassword: new InputSettings(inputsChangePassword),
    simpleButton: new SimpleButton(simpleButtons),
};

const data = {
    backSection: new BackArrow(),
    mainSection: new MainSection(dataMainSection),
};

interface UserSettingsPageProps {
    backSection: BackArrow;
    mainSection: MainSection,
}

export class UserSettingsPage extends Block<UserSettingsPageProps> {
    constructor(props: UserSettingsPageProps) {
        super(tpl, props);
    }
}
