import {ChatsAPI, ChatUserData, CreateChatData, GetChatsData} from "../api/ChatsAPI";
import {store} from "../utils/Store";


class ChatsController {
    private api: ChatsAPI;

    constructor() {
        this.api = new ChatsAPI()
    }

    getChats(data: GetChatsData) {
        store.set('chats.isLoading', true);
        this.api.getChats(data)
            .then((user) => {
                store.set('chats.data', user);
            })
            .catch(() => {
                store.set('chats.hasError', true);
            })
            .finally(() => {
                store.set('chats.isLoading', false);
            });
    }

    createChat(data: CreateChatData) {
        try {
            this.api.createChat(data)
        } catch (err) {
            console.log('createChat error', err)
        }
    }

    addUser(data: ChatUserData) {
        try {
            this.api.addUser(data)
        } catch (err) {
            console.log('addUser error', err)
        }
    }

    removeUser(data: ChatUserData) {
        try {
            this.api.removeUser(data)
        } catch (err) {
            console.log('removeUser error', err)
        }
    }
}

export default new ChatsController();
