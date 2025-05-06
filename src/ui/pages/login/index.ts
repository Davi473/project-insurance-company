import Button from "../../components/Button/index";
import InputText from "../../components/InputText/index";
import NamePage from "../../components/NamePage/index";
import NavigateTo from "../../components/NavigateTo/index";
import RememberLater from "../../components/RememberLater/index";
import Home from "../home/index";
import Register from "../register/index";
import LoginObject from "../../../domain/entities/LoginObject";

export default function Login() { 
    const app = document.querySelector("#app")
    if (!app) return;
    app.innerHTML = "";
    app.appendChild(NamePage("Login"));
    const [inputEmail, getValueInputEmail] = InputText("Email adress", "email")
    const [inputPassword, getValueInputPassword] = InputText("Password", "password");
    const rememberLater: RememberLater = new RememberLater();

    async function callback () {
        const email = getValueInputEmail();
        const password = getValueInputPassword();
        if (email && password) {
            console.log(email, password);
            const user = new LoginObject(email, password);
            try {
                const response: any = await fetch("http://localhost:3001/login", {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email: user.getEmail(), password: user.getPassword()});
                });
                const responseJson = await response.json();
                (globalThis as any).token = responseJson.token;
                Home();
            } catch (e: any) {
                alert(`error: ${e.message}`);
            }
        }
    }

    const [ button ] = Button("log In", callback);
    app.appendChild(inputEmail);
    app.appendChild(inputPassword);
    app.appendChild(rememberLater.element);
    app.appendChild(button);
    app.appendChild(NavigateTo("Register", () => {Register()}))
}
