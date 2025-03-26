import User from "../../../domain/entity/User";
import UserRepository from "../../../infra/repository/UserRepository";
import UseCase from "../UseCase";

export default class Register implements UseCase{
    constructor (private readonly repository: UserRepository) {}

    public async execute(input: Input): Promise<Output> {
        const user = await User.create(input.name, input.email, input.password);
        await this.repository.save(user);
        return { id: user.getId() };
    }
}

type Input = {
    name: string, 
    email: string,
    password: string,
}

type Output = {
    id: string
}