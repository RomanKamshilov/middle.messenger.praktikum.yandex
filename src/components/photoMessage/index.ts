import tpl from './tpl.hbs';
import './style.css';
import * as cameraPhoto from '../../../static/cameraPhoto.png';
import {Block} from "../../domain";

interface PhotoMessageProps {
    photo?: typeof cameraPhoto;
    time?: string;
}

const dataPhotoMessage = {
    photo: cameraPhoto,
    time: '12:56',
};

export class PhotoMessage extends Block<PhotoMessageProps> {
    constructor(props: PhotoMessageProps = dataPhotoMessage) {
        super(tpl, props);
    }
}
