enum Currencys {
    EUR = "EUR",
    BRL = "BRL",
    GBP = "GBP"
}

export default class Currency {
    private value: string;

    constructor (currency: string) {
        if (!(currency in Currencys)) throw new Error("This type of currency does not exist");
        this.value = Currencys[currency.toUpperCase() as keyof typeof Currencys];
    }

    public getValue(): string {
        return this.value;
    }
}