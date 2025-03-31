export default class NamePage {
    readonly element: Element;
    constructor (
        name: string,
    ) {
        const h1 = document.createElement("h1");
        h1.innerText = name;
        this.element = document.createElement("div");
        this.element.className = "text-center";
        this.element.appendChild(h1);
    }
}