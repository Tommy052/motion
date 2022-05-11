export class BaseComponent {
    constructor(htmlString) {
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild;
    }
    attachTo(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
    removeFrom(parent) {
        parent.removeChild(this.element);
    }
    attach(component, position = 'afterbegin') {
        component.attachTo(this.element, position);
    }
}
