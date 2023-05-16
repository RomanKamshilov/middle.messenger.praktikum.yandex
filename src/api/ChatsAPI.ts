import BaseAPI from "./BaseAPI";
import {User} from "./AuthAPI";

export interface GetChatsData {
    offset: number;
    limit: number;
    title: string;
}

export interface Chat {
    id: number;
    title: string;
    avatar: string;
    unread_count: number;
    last_message: {
        user: User;
        "time": string;
        "content": string;
    };
}

export interface CreateChatData {
    title: string;
}

export interface ChatUserData {
    users: number[];
    chatId: number;
}

export class ChatsAPI extends BaseAPI {
    create = undefined;
    read = undefined;
    update = undefined;
    delete = undefined;

    constructor() {
        super('/chats');
    }

    getChats(data: GetChatsData) {
        return this.http.get('', data);
    }

    createChat(data: CreateChatData) {
        return this.http.post('', data)
    }

    addUser(data: ChatUserData) {
        return this.http.put('/users', data)
    }

    removeUser(data: ChatUserData) {
        return this.http.delete('/users', data)
    }

}
