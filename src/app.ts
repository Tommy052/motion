import { Component } from './components/component.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent ,Composable} from './components/page/page.js';

class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const video = new VideoComponent('video title', 'https://www.youtube.com/watch?v=SfyDnZ7b0IM');
        this.page.addChild(video);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        this.page.addChild(image);
        const todo = new TodoComponent('todo Title', 'asdadsasdasd');
        this.page.addChild(todo);
        const note = new NoteComponent('note Title', 'body 1234123123123');
        this.page.addChild(note);

    }
}

new App(document.querySelector('.document')! as HTMLElement);