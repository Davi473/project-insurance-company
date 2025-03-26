import Quotation from "../../domain/Quotation";
import QuotationRepository from "../../infra/repository/QuotationRepository";
import UseCase from "./UseCase";

export default class CalculeQuotation implements UseCase {

    constructor (readonly repository: QuotationRepository) {}

    public async execute(input: Input): Promise<Output> {
        const {id, age, currency_id, start_date, end_date} = input;
        const quotation = new Quotation(id, age, currency_id, start_date, end_date);
        this.repository.save(quotation);
        return {
            total: quotation.getTotal(),
            currency_id: quotation.getCurrencyId(),
            quotation_id: quotation.getQuotationId()
        }
    }
}

type Input = {
    id: string
    age: string
    currency_id: string
    start_date: string
    end_date: string
}

type Output = {
    total: number
    currency_id: string
    quotation_id: number
}