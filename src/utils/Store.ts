import {Block, EventBus} from "../domain";
import {isEqual, set} from './helpers';
import {User} from "../api/AuthAPI";
import {Chat} from "../api/ChatsAPI";

export enum StoreEvents {
    UPDATED = 'UPDATED',
}

interface State {
    user: {
        data?: User;
        isLoading?: boolean;
        hasError?: boolean;
    },
    chats: {
        data?: Chat;
        isLoading?: boolean;
        hasError?: boolean;
    }
}

class Store extends EventBus {
    private state: State = {user: {}, chats: {}};
 
    public set(keypath: string, value: unknown) {
        set(this.state, keypath, value);

        this.emit(StoreEvents.UPDATED, this.state);
    }

    public getState() {
        return this.state;
    }
}

const store = new Store();

export const withStore = (mapStateToProps: (state: State) => any) => {
    return (Component: typeof Block) => {
        return class WithStore extends Component {
            constructor(props: any) {
                const mappedState = mapStateToProps(store.getState());
                super(() => '', {...props, ...mappedState});

                store.on(StoreEvents.UPDATED, (newState) => {
                    const newMappedState = mapStateToProps(newState)
                    if (isEqual(mappedState, newMappedState)) {
                        return;
                    }
                    this.setProps(newMappedState);
                });
            }
        }
    }
}

export {store};
