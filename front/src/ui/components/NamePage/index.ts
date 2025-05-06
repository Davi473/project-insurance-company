export default function NamePage(name: string): HTMLElement {
    const h1 = document.createElement("h1");
    h1.innerText = name;
    const element = document.createElement("div");
    element.className = "text-center";
    element.appendChild(h1);
    return element;
}