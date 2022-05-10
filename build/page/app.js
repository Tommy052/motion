import { ImageComponent } from './item/image.js';
// import { BaseComponent } from './../componets/component';
import { PageComponent, } from '../componets/page.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('title image', 'https://picsum.photos/200');
        image.attachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.document'));
