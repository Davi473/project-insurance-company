import Email from "../vo/Email";

export default class RegisterObject {
    private name: string;
    private email: Email;
    private password: string;

    constructor (
        name: string,
        email: string,
        password: string
    ) {
        this.name = name;
        this.email = new Email(email);
        this.password = password;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email.getValue();
    }

    public getPassword(): string {
        return this.password;
    }
}