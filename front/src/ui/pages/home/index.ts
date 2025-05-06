import Quotation from "../../../domain/entities/Quotation";
import Button from "../../components/Button/index";
import InputText from "../../components/InputText/index";
import ResultCalculate from "../resultCalculate/index";

export default function Home() {
    const app = document.querySelector("#app");
    if (!app) return;
    app.innerHTML = "";
    const [elementAge, getValueAge] = InputText("Age", "text");
    const [elementCurrency, getValueCurrency] = InputText("Currency", "text");
    const [elementStartDate, getValueStartDate] = InputText("Start", "date");
    const [elementEndDate, getValueEndDate] = InputText("End", "date");
    async function calculteTrip(): Promise<void> {
        if (!getValueAge() && !getValueCurrency() && !getValueEndDate() && !getValueStartDate()) return;
        try {
            const token = localStorage.getItem("token");
            const quotation = new Quotation(getValueAge(), getValueCurrency(), new Date(getValueStartDate()), new Date(getValueEndDate()));
            const response: any = await fetch("http://localhost:3004/quotation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({age: quotation.getAge(), currency_id: quotation.getCurrency(), 
                    start_date: quotation.getStart(), end_date: quotation.getEnd() })
            });
            const responseJson = await response.json();
            console.log(responseJson);
            if (responseJson.currency_id === undefined) throw new Error("Invalid data");
            ResultCalculate(responseJson);
        } catch (e: any) {
            alert(`Error: ${e.message}`);
        }

    }
    const [ button ] = Button("Calculate Trip", () => calculteTrip());
    app.appendChild(elementAge);
    app.appendChild(elementCurrency);
    app.appendChild(elementStartDate);
    app.appendChild(elementEndDate);
    app.appendChild(button);
}