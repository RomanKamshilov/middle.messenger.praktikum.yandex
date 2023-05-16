import {AuthorizationPage, RegistrationPage} from '../pages/authorization';
import {ChatPage} from '../pages/chat';
import {IndexData, Page} from '../domain';
import {IndexPage} from '../pages/main';
import {UserSettingsPage} from '../pages/userSettings';
import {Page500} from '../pages/500';
import {Page400} from '../pages/400';

export const NOT_FOUND_PAGE: Page = {
    title: 'Страница 404',
    link: '404',
    component: Page400,
};

export const ERROR_PAGE: Page = {
    title: 'Страница 5**',
    link: '500',
    component: Page500,
};

async function checkAuth() {
    return new Promise((resolve) => {
        resolve(true);
    });
}

export const INDEX_DATA: IndexData = {
    pages: [
        {
            title: 'Главная',
            link: '',
            component: IndexPage,
        },
        {
            title: 'Страница авторизации',
            link: 'sign-in',
            component: AuthorizationPage,
        },
        {
            title: 'Страница регистрации',
            link: 'sign-up',
            component: RegistrationPage,
        },
        {
            title: 'Страница списка чатов и ленты переписок',
            link: 'chat',
            component: ChatPage,
            guard: async () => await checkAuth(),
        },
        {
            title: 'Страница настроек пользователя',
            link: 'userSettings',
            component: UserSettingsPage,
        },
        NOT_FOUND_PAGE,
        ERROR_PAGE,
    ],
};
