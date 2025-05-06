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
    const [inputNickName, getValueInputNickName] = InputText("Nickname", "Nickname");
    const [inputPassword, getValueInputPassword] = InputText("Password", "password");
    const rememberLater: RememberLater = new RememberLater();

    function callback () {
        const email = getValueInputEmail();
        const nickName = getValueInputNickName();
        const password = getValueInputPassword();

        if (email && password && nickName) {
            console.log(email, password, nickName);
            // (globalThis as any).token = token;
            return;
        }
    }

    const [ button ] = Button("log In", callback);
    app.appendChild(inputEmail);
    app.appendChild(inputNickName);
    app.appendChild(inputPassword);
    app.appendChild(rememberLater.element);
    app.appendChild(button);
    app.appendChild(NavigateTo("Login", () => {Login()}));
}
