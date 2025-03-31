import User from "../../domain/entities/User.js";
import { UserService } from "../../infrastructure/service/UserService.js";
import Home from "../../ui/pages/home.js";

export class LoginUseCase {
    constructor(readonly service: UserService) {}

    public async execute(input: Input) {
        const user = new User(input.email, input.password);
        const response = await this.service.login(user);
        if (response.token) {
            (globalThis as any).token = response.token;
            new Home();
        }
    }
}

type Input = {
    email: string,
    password: string
}