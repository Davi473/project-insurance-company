import User from "../../../domain/entity/User";
import UserRepository from "../../../infra/repository/UserRepository";
import UseCase from "../UseCase";

export default class Register implements UseCase{
    constructor (private readonly repository: UserRepository) {}

    public async execute(input: Input): Promise<Output> {
        const useExist = await this.repository.findByEmail(input.email);
        if (useExist) throw new Error("User already exists");
        const user = await User.create(input.name, input.email, input.password);
        await this.repository.save(user);
        return { id: user.getId(), name: user.getName() };
    }
}

type Input = {
    name: string, 
    email: string,
    password: string,
}

type Output = {
    id: string,
    name: string
}