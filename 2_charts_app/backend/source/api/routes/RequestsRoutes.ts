import { IRouter } from "../../core/api/IRouter";
import { Router, Request, Response } from "express";
import { RequestsController } from "../controllers/RequestsController";
import { IRepository } from "../../core/repositories/IRepository";
import { IEpaData } from "../../core/models/IEpaData";

export class RequestsRoutes implements IRouter {
    router: Router = Router();
    path: string = '/api/req';  
    private controller: RequestsController;

    constructor(repository: IRepository<IEpaData>) {
        this.ConstructRoutes();
        this.controller = new RequestsController(repository);
    }

    ConstructRoutes(): void {
        this.router.get('/methods', (request:Request, response:Response) => this.controller.GetRequestMethodsDistribution(request, response));
        this.router.get('/time', (request:Request, response:Response) => this.controller.GetRequestOverTime(request, response));
    }
}