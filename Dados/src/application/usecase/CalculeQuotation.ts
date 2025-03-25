import UseCase from "./UseCase";

export default class CalculeQuotation implements UseCase {
    constructor () {}

    public async execute(input: Input): Promise<Output> {
        const quotation = Q
    }
}

type Input = {
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