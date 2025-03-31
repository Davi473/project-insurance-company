import Quotation from "../../domain/entities/Quotation.js";
import { QuotationService } from "../../infrastructure/service/QuotationService.js";
import ResultCalculate from "../../ui/pages/resultCalculate.js";

export class HomeUseCase {
    constructor(readonly service: QuotationService) {}

    public async execute(input: Input) {
        const quotation = new Quotation(input.age, input.currency, input.start, input.end);
        const response: any = await this.service.quotation(quotation);
        if (!response.message) new ResultCalculate(response);
    }
}

type Input = {
    age: string,
    currency: string,
    start: Date,
    end: Date
}