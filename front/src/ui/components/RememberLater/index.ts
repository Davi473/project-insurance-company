export default class RememberLater {
    readonly element: Element;
    constructor () {
        const input = document.createElement("input");
        input.className = "form-check-input";
        input.type = "checkbox";
        const label = document.createElement("label");
        label.className = "form-check-label";
        label.innerHTML = "Remember Later";
        this.element = document.createElement("div");
        this.element.className = "mb-3";
        this.element.appendChild(input);
        this.element.appendChild(label);
    }
}