import UserRepository from "../../../infra/repository/UserRepository";
import jwt from "jsonwebtoken";
import UseCase from "../UseCase";

export default class Login implements UseCase {
    constructor (
        readonly repository: UserRepository
    ) {}

    public async execute(input: Input): Promise<Output> {
        const user = await this.repository.findByEmail(input.email);
        if (!user) throw new Error("User already exists");
        if (!await user.validatePassword(input.password)) throw new Error("Incorrect password");
        const token = jwt.sign({ id: user.getId(), name: user.getName() }, "1234", { expiresIn: "1d"});
        const output = { token };
        return output;
    }
}

type Input = {
    email: string,
    password: string
}

type Output = {
    token: string;
}