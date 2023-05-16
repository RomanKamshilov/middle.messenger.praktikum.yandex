import BaseAPI from "./BaseAPI";

export interface ProfileData {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
}

export interface AvatarData {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    avatar: string;
}

export interface PasswordData {
    oldPassword: string;
    newPassword: string;
}


export class UsersAPI extends BaseAPI {
    create = undefined;
    read = undefined;
    update = undefined;
    delete = undefined;

    constructor() {
        super('/user');
    }

    profile(data: ProfileData) {
        return this.http.put('/profile', data)
    }

    avatar(data: AvatarData) {
        return this.http.put('/profile/avatar', data)
    }
 
    password(data: PasswordData) {
        return this.http.put('/password', data)
    }

    userById(userId: number) {
        return this.http.get(`/${userId}`)
    }

}
