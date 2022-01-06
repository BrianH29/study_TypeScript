import { PageComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        this.page.addChild(image);
        const note = new NoteComponent('Note Title', 'Note BODY');
        this.page.addChild(note);
        const todo = new TodoComponent('ToDo Title', 'Todo Item');
        this.page.addChild(todo);
        const url = 'https://www.youtube.com/watch?v=TTLHd3IyErM';
        const video = new VideoComponent(url, 'Video TITLE');
        this.page.addChild(video);
    }
}
const el = document.querySelector('.document');
new App(el);
