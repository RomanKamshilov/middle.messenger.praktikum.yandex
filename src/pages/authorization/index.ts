import tpl from './tpl.hbs';
import './style.css';
import {InputLoginAuth} from "../../components/inputLoginAuth";
import {BlueButton} from "../../components/blueButton";
import {HrefReg} from "../../components/hrefReg";
import {Block} from '../../domain';
import {FormValidator, ValidationObject} from "../../utils/validate";

const button = new BlueButton({label: 'Авторизоваться'});
setTimeout(() => button.setProps({label: '1'}), 3000);

interface AuthorizationPageProps {
    titleSignIp?: string;
    titleSignUp?: string;
    inputLoginReg?: Block;
    inputAuthReg?: Block;
    signUp?: boolean;
    signIn?: boolean;
    blueButtonSignUp?: Block;
    hrefRegSignUp?: Block;
    blueButtonSignIn?: Block;
    hrefRegSignIn?: Block;
}

class AuthorizationPage extends Block<AuthorizationPageProps> {
    constructor(propsAndChildren: AuthorizationPageProps) {
        super(tpl, propsAndChildren);
    }
}

const inputsSignIn = {
    inputsSignIn: [
        {
            label: 'Логин',
            name: 'login',
            type: 'text',
            value: 'vadimololo',
        },
        {
            label: 'Пароль',
            name: 'password',
            type: 'password',
            value: 'vot_takoi_parol132',
        },
    ],
};

const inputsSignUp = {
    inputsSignUp: [
        {
            label: 'Почта',
            name: 'email',
            type: 'email',
            value: 'vadimololo@yandex.ru',
        },
        {
            label: 'Логин',
            name: 'login',
            type: 'text',
            value: 'vot_takoi',
        },
        {
            label: 'Имя',
            name: 'first_name',
            type: 'text',
            value: 'Вадим',
        },
        {
            label: 'Фамилия',
            name: 'second_name',
            type: 'text',
            value: 'Вадимов',
        },
        {
            label: 'Телефон',
            name: 'phone',
            type: 'text',
            value: '+7 (777) 777-77-77',
        },
        {
            label: 'Пароль',
            name: 'password',
            type: 'password',
            value: 'vot_takoi_parol132',
        },
        {
            label: 'Пароль (ещё раз)',
            name: 'password',
            type: 'password',
            value: 'vot_takoi_parol132',
        },
    ],
};

export const dataAuthorization = {
    titleSignIn: 'Вход',
    inputLoginAuth: new InputLoginAuth(inputsSignIn),
    signIn: true,
    blueButtonSignIn: new BlueButton({label: 'Авторизоваться'}),
    hrefRegSignIn: new HrefReg({href: '/sign-up', value: 'Нет аккаунта?'}),
};

export const dataRegistration = {
    titleSignUp: 'Регистрация',
    inputLoginReg: new InputLoginAuth(inputsSignUp),
    signUp: true,
    blueButtonSignUp: new BlueButton({label: 'Зарегистрироваться'}),
    hrefRegSignUp: new HrefReg({href: '/sign-in', value: 'Войти'}),
}


function render(block: any) {
    const root = document.getElementById('root');
    root!.appendChild(block.getContent());
    return root;
}

const authorizationPage = (type: 'auth' | 'reg') => {
    const authPage = new AuthorizationPage(type === 'auth' ? dataAuthorization : dataRegistration);
    // document.addEventListener("DOMContentLoaded", () => {
    //     const form = document.getElementById("form__login__auth") as HTMLFormElement;
    //     const validations: ValidationObject = {
    //         first_name: (value: string) => /^[a-zA-Zа-яА-Я]+(?:-[a-zA-Zа-яА-Я]+)*$/.test(value),
    //         second_name: (value: string) => /^[a-zA-Zа-яА-Я]+(?:-[a-zA-Zа-яА-Я]+)*$/.test(value),
    //         login: (value: string) => /^[a-zA-Z][a-zA-Z0-9-_]{2,19}$/.test(value),
    //         email: (value: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
    //         password: (value: string) => /^(?=.*\d)(?=.*[A-Z]).{8,40}$/.test(value),
    //         phone: (value: string) => /^\+?\d{10,15}$/.test(value),
    //         message: (value: string) => value.trim() !== "",
    //     };
    //
    //     new FormValidator(form, validations)
    // })
    render(authPage);
}

export default authorizationPage;
