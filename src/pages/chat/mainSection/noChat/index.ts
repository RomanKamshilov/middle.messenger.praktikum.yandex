import tpl from './tpl.hbs';
import './style.css';

interface DataNoChat {
    text: string;
}

const data: DataNoChat = {
    text: 'Выберите чат чтобы отправить сообщение',
};

const noChat = () => {
    return tpl(data);
};

export default noChat;
