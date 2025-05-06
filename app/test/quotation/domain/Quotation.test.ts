import Quotation from "../../../src/domain/entity/Quotation";

test("Normal", () => {
    const quotation = new Quotation(crypto.randomUUID(), "28,35", "EUR", "2020-10-01", "2020-10-30");
    expect(quotation.getTotal()).toBe(117.00);
    expect(quotation.getCurrencyId()).toBe("EUR");
});

test("Moeda Invalida", () => {
    const invalidCurrencies = ["Ore", "AAA", "BBBB", "XYZ", ""];

    invalidCurrencies.forEach((currency) => {
        expect(() => {
            new Quotation(crypto.randomUUID(), "28,35", currency, "2020-10-01", "2020-10-30");
        }).toThrow("This type of currency does not exist");
    });
});

test("Idade Invalida", () => {
    const invalidAge = ["sdfs", "a34,34"];
    invalidAge.forEach((age) => {
        expect(() => {
            new Quotation(crypto.randomUUID(), age, "EUR", "2020-10-01", "2020-10-30");
        }).toThrow("Invalid age");
    })
});

test("Age Load Invalida", () => {
    expect(() => {
        new Quotation(crypto.randomUUID(), "70,72", "EUR", "2020-10-01", "2020-10-30").getTotal();
    }).toThrow("This number is not on the list");
});