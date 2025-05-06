import Register from "../../../application/usecase/user/Register";
import HttpServer from "../../http/HttpServer";

export default class RegisterController {
	constructor (
		readonly httpServer: HttpServer,
		readonly register: Register
	) {
		this.httpServer.register("post", "/register", async (params: any, body: any) => {
			const input = body;
			const output = await this.register.execute(input);
			return output;
		});
	}
}
