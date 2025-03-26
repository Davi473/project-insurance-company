import Quotation from "../src/domain/Quotation"

test("Test Quotation", () => {
    const quotation = new Quotation("2fgdfgonini", "28,35", "EUR", "2020-10-01", "2020-10-30");
    expect(quotation.getTotal()).toBe(117);
})