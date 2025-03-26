import CalculeQuotation from "../../application/usecase/CalculeQuotation";
import HttpServer from "../http/HttpServer";

export default class QuotationController {
    constructor (
        readonly httpServer: HttpServer,
        readonly calculeQuotation: CalculeQuotation
    ) {
        this.httpServer.register("post", "/quotation", async (params: any, body: any, user: any) => {
            const input = {...body, ...user};     
            const output = await this.calculeQuotation.execute(input);
            return output;
        });
    }
}