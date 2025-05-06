export default function Button(name: string, callback: Function): [HTMLElement] {
    const element = document.createElement("input");
    element.className = "btn btn-primary";
    element.type = "button";
    element.value = name;
    element.onclick = () => callback();

    return [element];
}