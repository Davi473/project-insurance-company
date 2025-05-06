import RegisterObject from "../../../domain/entities/RegisterObject";
import Button from "../../components/Button/index";
import InputText from "../../components/InputText/index";
import NamePage from "../../components/NamePage/index";
import NavigateTo from "../../components/NavigateTo/index";
import RememberLater from "../../components/RememberLater/index";
import Login from "../login/index";

export default function Register() { 
    const app = document.querySelector("#app")
    if (!app) return;
    app.innerHTML = "";
    app.appendChild(NamePage("Register"));
    const [inputEmail, getValueInputEmail] = InputText("Email adress", "email");
    const [inputName, getValueInputName] = InputText("Name", "Name");
    const [inputPassword, getValueInputPassword] = InputText("Password", "password");
    const rememberLater: RememberLater = new RememberLater();

    async function callback () {
        const email = getValueInputEmail();
        const name = getValueInputName();
        const password = getValueInputPassword();

        if (email && password && name) {
            const register = new RegisterObject(name, email, password);
            try {
                const response: any = await fetch("http://localhost:3004/register", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name: register.getName(), email: register.getEmail(), password: register.getPassword()})
                });
                Login();
            } catch (e: any) {
                alert(`error: ${e.message}`);
            }
        }
    }

    const [ button ] = Button("log In", callback);
    app.appendChild(inputEmail);
    app.appendChild(inputName);
    app.appendChild(inputPassword);
    app.appendChild(rememberLater.element);
    app.appendChild(button);
    app.appendChild(NavigateTo("Login", () => {Login()}));
}
