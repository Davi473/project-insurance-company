import CalculeQuotation from "../src/application/usecase/CalculeQuotation";
import { QuotationRepositoryMemory } from "../src/infra/repository/QuotationRepository";


const repository =  new QuotationRepositoryMemory();
const calculeQuotation = new CalculeQuotation(repository);

test("Validar Quotation", async () => {
    const quotation = {
        id: "ddfgdfgdfg",
        age: "28,35",
        currency_id: "EUR",
        start_date: "2020-10-01",
        end_date: "2020-10-30"
    };
    const response = await calculeQuotation.execute(quotation);
    expect(response.total).toBe(117);
    expect(response.currency_id).toBe("EUR");
});

test("Idade invalida", async () => {
    const quotation = {
        id: "ddfgdfgdfg",
        age: "28, 35",
        currency_id: "EUR",
        start_date: "2020-10-01",
        end_date: "2020-10-30"
    };
    await expect(calculeQuotation.execute(quotation)).rejects.toThrow("Invalid age");
});

test("Currency Invalid", async () => {
    const quotation = {
        id: "ddfgdfgdfg",
        age: "28,35",
        currency_id: "fgdf",
        start_date: "2020-10-01",
        end_date: "2020-10-30"
    };
    await expect(calculeQuotation.execute(quotation)).rejects.toThrow("This type of currency does not exist");
});

test("Datas Invertidas", async () => {
    const quotation = {
        id: "ddfgdfgdfg",
        age: "28,35",
        currency_id: "EUR",
        start_date: "2020-10-30",
        end_date: "2020-10-01"
    };
    await expect(calculeQuotation.execute(quotation)).rejects.toThrow("The start date must be greater than the end date");
});


test("Datas invalidas", async () => {
    const quotation = {
        id: "ddfgdfgdfg",
        age: "28,35",
        currency_id: "EUR",
        start_date: "",
        end_date: "2020-10-30"
    };
    await expect(calculeQuotation.execute(quotation)).rejects.toThrow("No date");
});