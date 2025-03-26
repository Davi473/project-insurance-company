import axios from "axios";

test("Test Api", async () => {
    const user = {
        email: `test@gmail.com`,
        password: "1234"
    };
    const outputData = await axios.put("http://localhost:3000/login", user);
    const output: any = outputData.data;
    expect(typeof output.token).toBe("string");
    const quotation = {
        "age": "28,35",
        "currency_id": "EUR",
        "start_date": "2020-10-01",
        "end_date": "2020-10-30"
    }
    const outputDataQuotation = await axios.post("http://localhost:3001/quotation", quotation, {
        headers: { Authorization: `Bearer ${output.token}`, }});
    const outputQuotation: any = outputDataQuotation.data;
    expect(outputQuotation.total).toBe(117);
    expect(outputQuotation.currency_id).toBe("EUR");
});