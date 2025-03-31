export default class Text {
    readonly element: Element;
    constructor (
        name: string,
        response: string | number
    ) {
        const label = document.createElement("label");
        label.className = "from-label";
        label.innerText = name;
        const h2 = document.createElement("h2");
        h2.className = "form-control";
        h2.innerText = response.toString();
        this.element = document.createElement("div");
        this.element.className = "mb-3";
        this.element.appendChild(label);
        this.element.appendChild(h2);
    }
}