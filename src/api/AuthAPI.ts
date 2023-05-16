import BaseAPI from "./BaseAPI";

export interface SignUpData {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

export interface SighInData {
    login: string;
    password: string;
}

export interface User {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    avatar: string;
}

export class AuthAPI extends BaseAPI {
    create = undefined;
    read = undefined;
    update = undefined;
    delete = undefined;

    constructor() {
        super('/auth');
    }

    signup(data: SignUpData) {
        return this.http.post('/signup', data);
    }

    signin(data: SighInData) {
        return this.http.post('/signin', data);
    }

    logout() {
        return this.http.post('/logout');
    }

    getUser() {
        return this.http.get<User>('/user');
    }
}
