import Button from "../../components/Button/index";
import InputText from "../../components/InputText/index";
import NamePage from "../../components/NamePage/index";
import NavigateTo from "../../components/NavigateTo/index";
import RememberLater from "../../components/RememberLater/index";
import Home from "../home/index";
import Register from "../register/index";

export default function Login() { 
    const app = document.querySelector("#app")
    if (!app) return;
    app.innerHTML = "";
    app.className = "d-flex justify-content-center align-items-center flex-column min-vh-100"
    app.appendChild(NamePage("Login"));
    const [inputEmail, getValueInputEmail] = InputText("Email adress", "email")
    const [inputPassword, getValueInputPassword] = InputText("Password", "password");
    const rememberLater: RememberLater = new RememberLater();

    function callback () {
        const email = getValueInputEmail();
        const password = getValueInputPassword();
        if (email && password) {
            console.log(email, password);
            Home();
            return;
        }
    }

    const [ button ] = Button("log In", callback);
    app.appendChild(inputEmail);
    app.appendChild(inputPassword);
    app.appendChild(rememberLater.element);
    app.appendChild(button);
    app.appendChild(NavigateTo("Register", () => {Register()}))
}
