
enum CurrencyId {
    EUR = "EUR",
    GBP = "GBP",
    USD = "USD"
}

export default class Currency {
    private currency: CurrencyId;
    constructor (currency: string) {
        if (!(currency in CurrencyId)) throw new Error("This type of currency does not exist");
        this.currency = CurrencyId[currency.toUpperCase() as keyof typeof CurrencyId];
    }

    public getValue(): string {
        return this.currency;
    }
}