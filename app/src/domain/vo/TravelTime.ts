export default class TravelTime {
    private time: number;
    constructor (start_date: string, end_date: string) {
        const typeDateStart = new Date(`${start_date} 03:00:00`);
        const typeDateEnd = new Date(`${end_date} 03:00:00`);
        if (!this.isValidDate(typeDateEnd) || !this.isValidDate(typeDateStart)) throw new Error("No date");
        if (typeDateStart > typeDateEnd) throw new Error("The start date must be greater than the end date");
        const time = typeDateEnd.getTime() - typeDateStart.getTime();
        this.time = Math.floor(time / (1000 * 60 * 60 * 24)) + 1;
    }

    public getValue(): number {
        return this.time;
    }

    private isValidDate(date: any): boolean {
        return date instanceof Date && !isNaN(date.getTime());
    }
}