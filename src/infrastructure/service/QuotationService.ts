import HttpClient from "../httpClient/HttpClient";
import Quotation from "../../domain/entities/Quotation";

export class QuotationService {
    constructor (readonly httpClient: HttpClient) {}

    public async quotation(quotation: Quotation): Promise<{name: string, id: string}> {
        const response = await this.httpClient.post("/quotation", {
            age: quotation.getAge(), currency_id: quotation.getCurrency(), 
            start_date: quotation.getStart(), end_date: quotation.getEnd()
        }, { "Authorization": `Bearer ${(globalThis as any).token}` });
        return response;
    }
}