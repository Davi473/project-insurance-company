import Register from "../../domain/entities/Register.js";
import { UserService } from "../../infrastructure/service/UserService.js";
import Login from "../../ui/pages/login.js";

export class RegisterUseCase {
    constructor(readonly service: UserService) {}

    async execute(input: Input) {
        const user = new Register(input.name, input.email, input.password);
        const response = await this.service.register(user);
        if (response.name === user.getName()) return new Login()
    }
}


type Input = {
    name: string,
    email: string,
    password: string
}