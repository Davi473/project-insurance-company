export default class DivCenter {
    readonly element: HTMLDivElement;

    constructor () {
        this.element = document.createElement("div");
        this.element.style = "display: flex; align-content: center; flex-direction: column; flex-wrap: wrap";
    }

    public addElemente(tag: Element) {
        this.element.appendChild(tag);
    }
}