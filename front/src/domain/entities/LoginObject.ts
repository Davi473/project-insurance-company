import Email from "../vo/Email";

export default class LoginObject {
    private email: Email;
    private password: string;

    constructor (
        email: string,
        password: string
    ) {
        this.email = new Email(email);
        this.password = password;
    }

    public getEmail(): string {
        return this.email.getValue();
    }

    public getPassword(): string {
        return this.password;
    }
}