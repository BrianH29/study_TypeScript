import {PageComponent} from "./components/page.js";

class App{
    private readonly page: PageComponent;

    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
    }
}

const el = document.querySelector('.document')! as HTMLElement;
new App(el);