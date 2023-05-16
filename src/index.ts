import {Router} from './domain';
import {INDEX_DATA} from './constants/index-data.const';


const router = new Router('root');

// Create app router
INDEX_DATA.pages.forEach(p => router.use(`/${p.link}`, p.component));

router.start();
