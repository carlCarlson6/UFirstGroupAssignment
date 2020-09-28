import { Router } from "express";

export interface IRouter {
    router: Router;
    path: string;

    ConstructRoutes(): void
}