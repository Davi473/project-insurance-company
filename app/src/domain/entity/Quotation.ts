import Age from "../vo/Age";
import AgeLoad from "../vo/AgeLoad";
import Currency from "../vo/Currency";
import TravelTime from "../vo/TravelTime";

export default class Quotation {

    private idUser: string;
    private ages: Age;
    private currency_id: Currency;
    private travelTime: TravelTime;
    private start_date: string;
    private end_date: string;
    private quotation_id: number;

    constructor (
        idUser: string,
        age: string,
        currency_id: string,
        start_date: string,
        end_date: string
    ) {
        this.idUser = idUser;
        this.ages = new Age(age);
        this.currency_id = new Currency(currency_id);
        this.start_date = start_date;
        this.end_date = end_date;
        this.travelTime = new TravelTime(this.start_date, this.end_date);
        this.quotation_id = Date.now();
    }
    
   
    public getIdUser (): string {
        return this.idUser;
    }

    public getAge (): string {
        return this.ages.getValue();
    }

    public getCurrencyId (): string {
        return this.currency_id.getValue();
    }

    public getStartDate (): string {
        return this.start_date;
    }

    public getEndDate (): string {
        return this.end_date;
    }

    public getQuotationId (): number {
        return this.quotation_id;
    }

    public getTotal (): number {
        const fixedRate = 3;
        const ages = this.ages.getValue().split(",");
        const total = ages.reduce((total: number, age: string) => {
            const ageLoad = new AgeLoad(Number(age));
            const calcule = (fixedRate * ageLoad.getValue() * this.travelTime.getValue()).toFixed(2);
            return total += Number(calcule);
        }, 0);
        return total;
    }
}