// Import Quotation
import { QuotationRepositoryMemory } from "./infra/repository/QuotationRepository";
import QuotationController from "./infra/controller/QuotationController";
import CalculeQuotation from "./application/usecase/CalculeQuotation";
// Import Config Server
import { HttpServerExpress } from "./infra/http/HttpServer";
// Import User
import { UserRepositoryMemory } from "./infra/repository/UserRepository";
import RegisterController from "./infra/controller/RegisterController";
import LoginController from "./infra/controller/LoginController";
import Register from "./application/usecase/user/Register";
import Login from "./application/usecase/user/Login";

// Config Server
const HTTPSERVER = new HttpServerExpress();
const PORT = 3004;

// Quotation
const repositoryQuotation = new QuotationRepositoryMemory();
const calculeQuotation = new CalculeQuotation(repositoryQuotation);
new QuotationController(HTTPSERVER, calculeQuotation);

// User
const repositoryUser = new UserRepositoryMemory();
const loginUseCase = new Login(repositoryUser);
const registerUseCase = new Register(repositoryUser);
new RegisterController(HTTPSERVER, registerUseCase);
new LoginController(HTTPSERVER, loginUseCase);

HTTPSERVER.listen(PORT);