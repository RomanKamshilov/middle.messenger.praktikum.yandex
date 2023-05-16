import {AvatarData, PasswordData, ProfileData, UsersAPI} from "../api/UsersAPI";
import {store} from "../utils/Store";

class UsersController {
    private api: UsersAPI;

    constructor() {
        this.api = new UsersAPI()
    }

    profile(data: ProfileData) {
        try {
            this.api.profile(data)
        } catch (err) {
            console.log('profile error', err)
        }
    }

    avatar(data: AvatarData) {
        try {
            this.api.avatar(data)
        } catch (err) {
            console.log('avatar error', err)
        }
    }

    password(data: PasswordData) {
        try {
            this.api.password(data)
        } catch (err) {
            console.log('password error', err)
        }
    }

    userById(userId: number) {
        store.set('user.isLoading', true);
        this.api.userById(userId)
            .then((user) => {
                store.set('user.data', user);
            })
            .catch(() => {
                store.set('user.hasError', true);
            })
            .finally(() => {
                store.set('user.isLoading', false);
            });
    }

}

export default new UsersController();
