import Register from "../../domain/entities/Register";
import User from "../../domain/entities/User";
import HttpClient from "../httpClient/HttpClient";

export class UserService {
    constructor (readonly httpClient: HttpClient) {}

    public async login(user: User): Promise<{token: string}> {
        const response = await this.httpClient.put("/login", { 
            email: user.getEmail(), password: user.getPassword()
        });
        return response;
    }

    public async register(user: Register): Promise<{name: string, id: string}> {
        const response = await this.httpClient.post("/register", {
            name: user.getName(), email: user.getEmail(), password: user.getPassword()
        });
        return response;
    }
}