import { Server } from './api/Server';
import express from 'express';
import morgan from "morgan";
import cors from "cors";
import { IRouter } from './core/api/IRouter';
import { AnswerRoutes } from "./api/routes/AnswerRoutes";
import { RequestsRoutes } from "./api/routes/RequestsRoutes";
import { IRepository } from './core/repositories/IRepository';
import { Repository } from './data/Repository';
import { IEpaData } from './core/models/IEpaData';
import dotenv from 'dotenv';
import { connectToDB } from './data/connectToDb';

const main = async () => {
    dotenv.config({path: 'dev.env'});
    
    await connectToDB();

    const middlewares = [express.json(), morgan('dev'), cors({credentials: true, origin:['http://localhost:3000', 'https://ufirst-charts-app.netlify.app']})];

    const repositroy: IRepository<IEpaData> = new Repository();
    
    const routers: Array<IRouter> = [new RequestsRoutes(repositroy), new AnswerRoutes(repositroy)];

    const server: Server = new Server();
    server.SetConfig(middlewares, routers);
    server.Start();
}

main();