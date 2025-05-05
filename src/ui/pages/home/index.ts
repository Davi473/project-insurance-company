import Button from "../../components/Button/index";
import InputText from "../../components/InputText/index";

export default function Home() {
    const app = document.querySelector("#app");
    if (!app) return;
    app.innerHTML = "";
    app.className = "d-flex justify-content-center align-items-center flex-column min-vh-100";
    const [elementAge, getValueAge] = InputText("Age", "text");
    const [elementCurrency, getValueCurrency] = InputText("Currency", "text");
    const [elementStartDate, getValueStartDate] = InputText("Start", "date");
    const [elementEndDate, getValueEndDate] = InputText("End", "date");
    function calculteTrip(): void {
        if (!getValueAge() && !getValueCurrency() && !getValueEndDate() && !getValueStartDate()) return;

    }
    const [ button ] = Button("Calculate Trip", () => calculteTrip());
    app.appendChild(elementAge);
    app.appendChild(elementCurrency);
    app.appendChild(elementStartDate);
    app.appendChild(elementEndDate);
    app.appendChild(button);
}