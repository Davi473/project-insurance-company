import Button from "./../components/Button/index.js";
import DivCenter from "./../components/DivCenter/index.js";
import NamePage from "./../components/NamePage/index.js";
import Text from "./../components/Text/index.js";
import Home from "./home.js";

export default class ResultCalculate {

    readonly total: Text;
    readonly quotation: Text;
    readonly button: Button;
    readonly divPage: DivCenter = new DivCenter();
    readonly body: Element;

    constructor (input: Input) {
        this.body = document.body;
        this.body.innerHTML = "";
        this.total = new Text("Total", `${input.currency_id} ${(input.total).toFixed(2)}`);
        this.quotation = new Text("Quotation", input.quotation_id);
        this.button = new Button("Return");
        this.returnPage();
        this.init();
        this.body.appendChild(this.divPage.element);
    }

    private init(): void {
        this.divPage.addElemente(new NamePage("Treval").element);
        this.divPage.addElemente(this.total.element);
        this.divPage.addElemente(this.quotation.element);
        this.divPage.addElemente(this.button.element);
    }

    private returnPage(): void {
        this.button.element.addEventListener("click", () => {
            new Home();
        });
    }
}

type Input = {
    total: number,
    currency_id: string
    quotation_id: number;
}