import axios from "axios";

const url = "http://localhost:3001";
const user = {
    name: "test",
    email: `${Math.random()}@gmail.com`,
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