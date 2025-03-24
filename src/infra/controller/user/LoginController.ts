import Login from "../../../application/usecase/user/Login";
import HttpServer from "../../http/HttpServer";

export default class LoginController {
    constructor (
        readonly httpServer: HttpServer,
        readonly login: Login
    ) {
        this.httpServer.register("put", "/login", async (params: any, body: any) => {
            const input = body;
            const output = await this.login.execute(input);
            return output;
        });
    }
}