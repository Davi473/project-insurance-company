import { HomeUseCase } from "../../application/use-cases/HomeUseCase.js";
import { HttpClientFetch } from "../../infrastructure/httpClient/HttpClient.js";
import { QuotationService } from "../../infrastructure/service/QuotationService.js";
import Button from "./../components/Button/index.js";
import DivCenter from "./../components/DivCenter/index.js";
import InputText from "./../components/InputText/index.js";
import NamePage from "./../components/NamePage/index.js";

export default class Home {
    readonly home: HomeUseCase;
    readonly token: string = (globalThis as any).token;
    readonly age: InputText = new InputText("Age", "text");
    readonly currency: InputText = new InputText("Currency", "text");
    readonly startDate: InputText = new InputText("Start", "date");
    readonly endDate: InputText = new InputText("End", "date");
    readonly button: Button = new Button("Calculate Trip");
    readonly divPage: DivCenter = new DivCenter();
    readonly body: Element;

    constructor () {
        const httpClient = new HttpClientFetch("http://localhost:3001");
        const service = new QuotationService(httpClient);
        this.home = new HomeUseCase(service);
        this.body = document.body;
        this.body.innerHTML = "";
        this.age.input.placeholder = "23,34";
        this.currency.input.placeholder = "EUR, BRL and GBP";
        this.calculteTrip();
        this.init();
        this.body.appendChild(this.divPage.element);
    }

    private init(): void {
        this.divPage.addElemente(new NamePage("Treval").element);
        this.divPage.addElemente(this.age.element);
        this.divPage.addElemente(this.currency.element);
        this.divPage.addElemente(this.startDate.element);
        this.divPage.addElemente(this.endDate.element);
        this.divPage.addElemente(this.button.element);
    }

    private calculteTrip(): void {
        this.button.element.addEventListener("click", async () => {
            const age = this.age.getValue();
            const currency_id = this.currency.getValue();
            const start_date = this.startDate.getValue();
            const end_date = this.endDate.getValue();
            if (!age || !currency_id || !start_date || !end_date) return alert("Contains empty columns");
            this.home.execute({age, currency: currency_id, start: new Date(start_date), end: new Date(end_date)});
        });
    }
}
