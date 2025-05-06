export default function InputText(name: string, type: string): [HTMLElement, Function] {
    const label = document.createElement("label");
    label.className = "form-label";
    label.innerText = name;
    const input = document.createElement("input");
    input.className = "form-control";
    input.type = type;
    const divAlert = document.createElement("div");
    const div = document.createElement("div");
    div.className = "mb-3";
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(divAlert);

    function getValue(): string {
        const value = input.value;
        if (!value) {
            alertValue();
            console.log(value);
        } else {
            divAlert.querySelector("p")?.remove();
        }
        return value;
    }

    function alertValue(): void {
        const small = document.createElement("small");
        small.className = "h7 text-danger";
        small.innerText = `Does not have ${name}`;
        divAlert.appendChild(small);
    }

    return [div, getValue];
}