type AgeRange = {min: number; max: number; load: number};

const AGE_LOADS: AgeRange[] = [
    { min: 18, max: 30, load: 0.6 },
    { min: 31, max: 40, load: 0.7 },
    { min: 41, max: 40, load: 0.8 },
    { min: 51, max: 60, load: 0.9 },
    { min: 61, max: 70, load: 1 }
];

export default class AgeLoad {
    private age: number;
    constructor (age: number) {
        if (!this.isValidAge(age)) throw new Error("Age outside the permitted range (18-70 years)");
        this.age = age;
    }

    private isValidAge(age: number): boolean {
        return age >= 18 && age <= 70;
    }

    private findAgeLoad(): number {
        const ageLoad = AGE_LOADS.find(({min, max}) => this.age >= min && this.age <= max);
        if (!ageLoad) throw new Error("This number is not on the list");
        return ageLoad.load;
    }

    public getValue(): number {
        return this.findAgeLoad();
    }
}