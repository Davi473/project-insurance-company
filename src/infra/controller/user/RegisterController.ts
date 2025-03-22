import HttpServer from "../../http/HttpServer";

export default class RegisterController {
	constructor (
		readonly httpServer: HttpServer
	) {
		this.httpServer.register("post", "/register", async (params, body) => {
			const input = body;
			const output = await this.register.export
		});
	}
}
