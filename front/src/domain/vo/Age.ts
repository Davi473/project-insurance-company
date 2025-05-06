export default class Age {
    private value: string;

    constructor (age: string) {
        this.value = age;
        if (age.slice(-1) === ",") this.value = this.value.slice(0, -1);
        if (!(/^\d+(,\d+)+$/.test(this.value))) throw new Error("Invalid age");
    }

    public getValue(): string {
        return this.value;
    }
}