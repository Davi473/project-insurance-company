import UseCase from "../UseCase";

export default class Register implements UseCase{
    constructor () {}

    execute(input: any): Promise<any> {
        const user = 
        return output;
    }
}

type Input = {
    name: string, 
    email: string,
    passward: string,
}

type Output = {
    id: string
}