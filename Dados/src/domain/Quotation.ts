export default class Quotation {
    private age: string[];
    private currency_id: string;
    private start_date: Date;
    private end_date: Date;

    constructor (
        age: string,
        currency_id: string,
        start_date: string,
        end_date: string
    ) {
        this.age = age.split(",");
        this.currency_id = currency_id // Fazer uma classe
        this.start_date = new Date(start_date);
        this.end_date = new Date(end_date);
    }

    public getTotal (): number {

    }

    public getCurrencyId (): string {

    }

    public getQuotationId (): number {

    }
}