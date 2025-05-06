import Age from "../vo/Age.js";
import Currency from "../vo/Currency.js";

export default class Quotation {
    private age: Age;
    private currency: Currency;
    private start: string;
    private end: string;

    constructor (
        age: string,
        currency: string,
        start: Date,
        end: Date
    ) {
        this.age = new Age(age);
        this.currency = new Currency(currency);
        this.start = start.toISOString().split("T")[0];
        this.end = end.toISOString().split("T")[0];
    }

    public getAge(): string {
        return this.age.getValue();
    }

    public getCurrency(): string {
        return this.currency.getValue();
    }

    public getStart(): string {
        return this.start;
    }

    public getEnd(): string {
        return this.end;
    }
}