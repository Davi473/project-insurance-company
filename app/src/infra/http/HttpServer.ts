export default interface HttpServer {
    register (method: string, url: string, autenticar: boolean, callback: Function): Promise<void>;
    listen (port: string | number): Promise<void>;
}

import express from "express";
import cors from "cors";
import { autenticarJWT } from "../middleware/Token";

export class HttpServerExpress implements HttpServer {
    readonly api: any;

    constructor () {
        this.api = express();
        this.api.use(cors());
        this.api.use(express.json());
    }

    public async register(method: string, url: string, autenticar: boolean, callback: Function): Promise<void> {
        if (autenticar) {
            this.api[method](url, autenticarJWT, async (req: any, res: any) => {
                try {
                    const output = await callback(req.pamars, req.body, req.user);
                    if (output) res.json(output);
                } catch (e: any) {
                    res.status(422).json({ message: e.message });
                }
            });
        } else {
            this.api[method](url, async (req: any, res: any) => {
                try {
                    const output = await callback(req.pamars, req.body, req.user);
                    if (output) res.json(output);
                } catch (e: any) {
                    res.status(422).json({ message: e.message });
                }
            });
        }
    }

    public async listen(port: string | number): Promise<void> {
        this.api.listen(port, () => console.log(`http://localhost:${port}`));
    }
}