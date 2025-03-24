import Login from "./application/usecase/user/Login";
import Register from "./application/usecase/user/Register";
import LoginController from "./infra/controller/user/LoginController";
import RegisterController from "./infra/controller/user/RegisterController"
import { HttpServerExpress } from "./infra/http/HttpServer";
import { UserRepositoryMemmory } from "./infra/repository/UserRepository";

const PORT = 3000;
const httpServer = new HttpServerExpress();

const repository = new UserRepositoryMemmory();

const register = new Register(repository);
const login = new Login(repository);

new RegisterController(httpServer, register);
new LoginController(httpServer, login);

httpServer.listen(PORT);
