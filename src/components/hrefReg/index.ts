import tpl from './tpl.hbs';
import './style.css';
import {Block, Router} from '../../domain';

interface HrefRegProps {
    href: string;
    value: string;
}

export class HrefReg extends Block {
    constructor(props: HrefRegProps) {
        super(tpl, {
            ...props, events: {
                click: (e: Event) => {
                    e.stopPropagation();
                    e.preventDefault();
                    Router.instance?.go(`/${this.props.href}`);
                }
            }
        });
    }


}
