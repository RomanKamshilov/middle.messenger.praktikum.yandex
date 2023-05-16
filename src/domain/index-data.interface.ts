import {Block} from './block.class';

export interface Page {
    title: string;
    link: string;
    component?: typeof Block;
    guard?: () => Promise<true | string>;
}

export interface IndexData {
    pages: Page[];
}
