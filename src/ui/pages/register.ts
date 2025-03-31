import { HttpClientFetch } from "../../infrastructure/httpClient/HttpClient.js";
import { UserService } from "../../infrastructure/service/UserService.js";
import { RegisterUseCase } from "./../../application/use-cases/RegisterUseCase.js";
import Button from "./../components/Button/index.js";
import DivCenter from "./../components/DivCenter/index.js";
import InputText from "./../components/InputText/index.js";
import NamePage from "./../components/NamePage/index.js";
import NavigateTo from "./../components/NavigateTo/index.js";
import Login from "./login.js";

export default class Register {
    readonly register: RegisterUseCase;
    readonly button: Button = new Button("Sign Up");
    readonly name: InputText = new InputText("Name", "text");
    readonly email: InputText = new InputText("Email adress", "email");
    readonly password: InputText = new InputText("Password", "password");
    readonly divFrom: DivCenter = new DivCenter();

    constructor () {
        const httpClient = new HttpClientFetch("http://localhost:3000");
        const service = new UserService(httpClient)
        this.register = new RegisterUseCase(service);
        document.body.innerHTML = "";
        this.signUp();
        this.init();
        document.body.appendChild(this.divFrom.element);
    }

    public init() {
        this.divFrom.addElemente(new NamePage("Register").element)
        this.divFrom.addElemente(this.name.element);
        this.divFrom.addElemente(this.email.element);
        this.divFrom.addElemente(this.password.element);
        this.divFrom.addElemente(this.button.element);
        this.divFrom.addElemente(new NavigateTo("Login", () => {new Login()}).element);
    }

    private signUp() {
        this.button.element.addEventListener("click", async () => {
            const name = this.name.getValue();
            const email = this.email.getValue();
            const password = this.password.getValue();
            if (!name && !email && !password) return alert("Contains empty columns");
            await this.register.execute({ name, email, password});
        });
    }
}