import HttpServer from "../http/HttpServer";

export default class QuotationController {
    constructor (
        readonly httpServer: HttpServer,
        readonly calculeQuotation: CalculeQuotation
    ) {
        this.httpServer.register("post", "/quotation", async (params: any, body: any) => {
            const input = body;
            const output = await this.calculeQuotation
        });
    }
}