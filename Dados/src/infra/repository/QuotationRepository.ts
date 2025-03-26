import Quotation from "../../domain/Quotation";

export default interface QuotationRepository {
    save (quotation: Quotation): Promise<void>;
    findByIdUser(idUser: string): Promise<Quotation[]>;
}

export class QuotationRepositoryMemory implements QuotationRepository {
    private quotations: Quotation[] = [];
    constructor () {}

    public async save (quotation: Quotation): Promise<void> {
        this.quotations.push(quotation);
    }

    public async findByIdUser(idUser: string): Promise<Quotation[]> {
        const filter = this.quotations.filter(quotation => quotation.getIdUser() === idUser);
        return this.quotations;
    }
}