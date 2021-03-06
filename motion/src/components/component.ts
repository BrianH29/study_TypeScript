export interface Component {
    attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

/**
 * Encapsulation the HTML element creation
 */
export class BaseComponent<T extends HTMLElement> implements Component {
    //상속하는 자식 클래스에서 만 볼수 있게 protected
    protected readonly element : T

    constructor(htmlString: string) {
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild! as T;
    }

    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin'){
        parent.insertAdjacentElement(position, this.element)
    }
}