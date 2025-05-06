export default class Email {
    private value: string

    constructor (email: string) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!(regex.test(email))) throw new Error("Invalid email");
        this.value = email;
    }

    public getValue(): string {
        return this.value;
    }
}