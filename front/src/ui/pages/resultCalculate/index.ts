import Button from "../../components/Button/index";
import NamePage from "../../components/NamePage/index";
import Text from "../../components/Text/index";
import Home from "../home/index";

export default function ResultCalculate(input: Input) {
    const app = document.querySelector("#app");
    if (!app) return;
    app.innerHTML = "";
    app.appendChild(NamePage("Register"));
    const total = Text("Total", `${input.currency_id} ${(input.total).toFixed(2)}`);
    const quotation = Text("Quotation", input.quotation_id);
    const [button] = Button("Return", () => Home());
    app.appendChild(total);
    app.appendChild(quotation);
    app.appendChild(button);
}

type Input = {
    total: number,
    currency_id: string
    quotation_id: number;
}