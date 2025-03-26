import axios from "axios";

const url = "http://localhost:3000";
const user = {
    name: "Davi",
    email: "test@gmail.com",
    password: "1234"
};

test("Register user", async () => {
    const outputData = await axios.post(`${url}/register`, user);
    const output: any = outputData.data;
    expect(typeof output.id).toBe("string");
});

test("Login User", async () => {
    const outputData = await axios.put(`${url}/login`, {email: user.email, password: user.password});
    const output: any = outputData.data;
    expect(typeof output.token).toBe("string");
});