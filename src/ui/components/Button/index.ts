export default class Button {
    readonly element: HTMLInputElement;

    constructor (text: string) {
        this.element = document.createElement("input");
        this.element.className = "btn btn-primary";
        this.element.type = "button";
        this.element.value = text;
    }
}