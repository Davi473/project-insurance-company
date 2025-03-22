import RegisterController from "./infra/controller/user/RegisterController"
import { HttpServerExpress } from "./infra/http/HttpServer";

const PORT = 3000;
const httpServer = new HttpServerExpress();

new RegisterController(httpServer);

httpServer.listen(PORT);
