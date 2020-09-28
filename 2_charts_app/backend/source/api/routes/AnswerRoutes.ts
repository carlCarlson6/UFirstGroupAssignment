import { IRouter } from "../../core/api/IRouter";
import { Router, Request, Response } from "express";
import { AnswerController } from "../controllers/AnswerController";
import { IRepository } from "../../core/repositories/IRepository";
import { IEpaData } from '../../core/models/IEpaData';

export class AnswerRoutes implements IRouter {
    router: Router = Router();
    path: string = '/api/ans';
    private controller: AnswerController;

    constructor(repository: IRepository<IEpaData>) {
        this.ConstructRoutes()
        this.controller = new AnswerController(repository);
    }

    ConstructRoutes(): void {
        this.router.get('/codes', (request:Request, response:Response) => this.controller.GetResponseCodesDistribution(request, response));
        this.router.get('/sizes', (request:Request, response:Response) => this.controller.GetResponseSizesDistribution(request, response));
    }
}