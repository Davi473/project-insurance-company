export default function NavigateTo(name: string, callback: Function) {
    const a = document.createElement("a");
    a.onclick = () => callback();
    a.innerText = name;
    const p = document.createElement("p");
    p.innerText = "to do "
    p.appendChild(a);
    const element = document.createElement("div");
    element.className = "text-center mb-3";
    element.appendChild(p);  
    
    return element;
}