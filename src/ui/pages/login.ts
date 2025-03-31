import { HttpClientFetch } from "../../infrastructure/httpClient/HttpClient.js";
import { UserService } from "../../infrastructure/service/UserService.js";
import { LoginUseCase } from "./../../application/use-cases/LoginUseCase.js";

import Button from "./../components/Button/index.js";
import DivCenter from "./../components/DivCenter/index.js";
import InputText from "./../components/InputText/index.js";
import NamePage from "./../components/NamePage/index.js";
import NavigateTo from "./../components/NavigateTo/index.js";
import RememberLater from "./../components/RememberLater/index.js";
import Register from "./register.js";

export default class Login {
    readonly login: LoginUseCase;
    readonly button: Button = new Button("log In");
    readonly rememberLater: RememberLater = new RememberLater();
    readonly password: InputText = new InputText("Password", "password");
    readonly email: InputText = new InputText("Email adress", "email");
    readonly divFrom: DivCenter = new DivCenter();

    constructor () {
        const httpClient = new HttpClientFetch("http://localhost:3000");
        const service = new UserService(httpClient);
        this.login = new LoginUseCase(service);
        document.body.innerHTML = "";
        this.buttonLonIn();
        this.init();
        document.body.appendChild(this.divFrom.element);
    }

    public init() {
        this.divFrom.addElemente(new NamePage("Login").element);
        this.divFrom.addElemente(this.email.element);
        this.divFrom.addElemente(this.password.element);
        this.divFrom.addElemente(this.rememberLater.element);
        this.divFrom.addElemente(this.button.element);
        this.divFrom.addElemente(new NavigateTo("Register", () => {new Register()}).element);
    }

    private buttonLonIn() {
        this.button.element.addEventListener("click", async () => {
            const email = this.email.getValue();
            const password = this.password.getValue();
            if (!email && !password) return alert("Contains empty columns");
            await this.login.execute({email, password});
        });
    }
}
