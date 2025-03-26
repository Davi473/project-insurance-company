import CalculeQuotation from "./application/usecase/CalculeQuotation";
import QuotationController from "./infra/controller/QuotationController";
import { HttpServerExpress } from "./infra/http/HttpServer";
import { QuotationRepositoryMemory } from "./infra/repository/QuotationRepository";


const httpServer = new HttpServerExpress();
const PORT = 3001;

const repository = new QuotationRepositoryMemory();

const calculeQuotation = new CalculeQuotation(repository);

new QuotationController(httpServer, calculeQuotation);

httpServer.listen(PORT);