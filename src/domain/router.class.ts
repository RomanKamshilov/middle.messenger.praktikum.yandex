import {Route} from './route.class';
import {NOT_FOUND_PAGE} from '../constants/index-data.const';

export class Router {
    static instance: Router | null = null;
    private readonly routes: Route[] = [];
    private readonly history = window.history;
    private readonly rootQuery = null;
    private currentRoute: Route | null = null;

    constructor(rootQuery) {
        if (Router.instance) {
            return Router.instance;
        }

        this.rootQuery = rootQuery;
        Router.instance = this;
    }

    use(pathname, block, guard?: () => Promise<string | true>
    ) {
        if (!guard) {
            guard =
                () => new Promise((resolve) => {
                    resolve(true);
                });
        }
        const route = new Route(pathname, block, {rootQuery: this.rootQuery}, guard);
        this.routes.push(route);

        return this;
    }

    start() {
        window.onpopstate = (event: any) => {
            this.onRoute(event.currentTarget.location.pathname);
        };

        this.onRoute(window.location.pathname);
    }

    go(pathname) {
        this.history.pushState({}, "", pathname);
        this.onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname): Route {
        return this.routes.find(route => route.match(pathname));
    }

    private async onRoute(pathname: string) {
        const route = this.getRoute(pathname);

        if (!route) {
            this.go(`/${NOT_FOUND_PAGE.link}`);
            return;
        }

        const checkGuard = await route.guardFn();

        if (checkGuard !== true) {
            this.go(`/${checkGuard}`);
        }

        if (this.currentRoute) {
            this.currentRoute.leave();
        }

        this.currentRoute = route;
        route.render();
    }
}
