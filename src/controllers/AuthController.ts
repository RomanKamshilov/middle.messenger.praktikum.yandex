import {AuthAPI, SighInData, SignUpData} from "../api/AuthAPI";
import {store} from "../utils/Store";

class AuthController {
    private api: AuthAPI;

    constructor() {
        this.api = new AuthAPI()
    }

    signup(data: SignUpData) {
        try {
            this.api.signup(data);
        } catch (err) {
            console.log('signup err', err);
        }
    }

    signin(data: SighInData) {
        try {
            this.api.signin(data);
        } catch (err) {
            console.log('signin err', err);
        }
    }

    logout() {
        try {
            this.api.logout();
        } catch (err) {
            console.log('logout err', err);
        }
    }

    fetchUser() {
        store.set('user.isLoading', true);
        this.api.getUser()
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

export default new AuthController();
