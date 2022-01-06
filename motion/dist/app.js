import { PageComponent } from "./components/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
    }
}
const el = document.querySelector('.document');
new App(el);
