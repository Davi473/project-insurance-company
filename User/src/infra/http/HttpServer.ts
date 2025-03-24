export default interface HttpServer {
	register (method: string, url: string, callback: Function): void;
	listen (port: number | string): void;
}
	
import express from "express";
import cors from "cors";

export class HttpServerExpress implements HttpServer {
	private api: any;
	constructor() {
		this.api = express();
		this.api.use(express.json());
		this.api.use(cors());
	}

	public register (method: string, url: string, callback: Function): void {
		this.api[method](url, async (req: any, res: any) => {
			try {
				const output = await callback(req.params, req.body);
				if (output) res.json(output);
			} catch (e: any) {
				res.status(422).json({ message: e.message });
			}
		});
	}

	public listen (port: number | string): void {
		this.api.listen(port, () => console.log(`http://localhost:${port}`));
	}
}
