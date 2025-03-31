export default class InputText {
    readonly input: HTMLInputElement;
    readonly element: Element;
    constructor (
        name: string,
        type: string
    ) {
        const label = document.createElement("label");
        label.className = "from-label";
        label.innerText = name;
        this.input = document.createElement("input");
        this.input.className = "form-control";
        this.input.type = type;
        this.element = document.createElement("div");
        this.element.className = "mb-3";
        this.element.appendChild(label);
        this.element.appendChild(this.input);
    }

    public getValue(): string {
        return this.input.value;
    }
}