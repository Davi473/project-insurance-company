export default class NavigateTo {
    readonly element: Element;
    constructor (
        name: string,
        callback: Function
    ) {
        const a = document.createElement("a");
        a.onclick = () => callback();
        a.innerText = name;
        const p = document.createElement("p");
        p.innerText = "to do "
        p.appendChild(a);
        this.element = document.createElement("div");
        this.element.className = "text-center mb-3";
        this.element.appendChild(p);
    }
}