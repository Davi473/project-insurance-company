export default function Text(name: string, response: string | number) {
    const label = document.createElement("label");
    label.className = "from-label";
    label.innerText = name;
    const h2 = document.createElement("h2");
    h2.className = "form-control";
    h2.innerText = response.toString();
    const element = document.createElement("div");
    element.className = "mb-3";
    element.appendChild(label);
    element.appendChild(h2);
    return element;
}