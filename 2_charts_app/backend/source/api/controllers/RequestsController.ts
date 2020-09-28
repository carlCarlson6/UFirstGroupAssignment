import { IEpaData } from "../../core/models/IEpaData";
import { IRepository } from "../../core/repositories/IRepository";
import {Request, Response } from "express";
import { Distribution, TimeDistribution } from "../../common/types";
import { getDistributionOfElements } from "../../common/utils/getDistributionOfElements";

export class RequestsController {
    
    constructor(private repository: IRepository<IEpaData>) { }

    async GetRequestMethodsDistribution(request:Request, response:Response) {
        const allEpaData: Array<IEpaData> = await this.repository.GetAllData();
        
        const allMethods: Array<string> = allEpaData.map(epa => epa.request.method);
        const codesDistribution: Distribution = getDistributionOfElements(allMethods);

        response.status(200).json(codesDistribution);
    }

    async GetRequestOverTime(request:Request, response:Response) {
        const allEpaData: Array<IEpaData> = await this.repository.GetAllData();

        const minutesRequests: Array<any> = allEpaData.map(epa => ({timestamp:(epa.date.day*24*60) + (epa.date.hour*60) +epa.date.minute, time:{day:epa.date.day, hour:epa.date.hour, minute:epa.date.minute}}));
        const allUniqueMinutes = allEpaData.map(epa => (epa.date.day*24*60) + (epa.date.hour*60) + epa.date.minute).filter((element, index, self) => index === self.indexOf(element));
        
        let distribution: TimeDistribution = []

        allUniqueMinutes.forEach(uniqueElement => {
            const minutesRequestsFilter = minutesRequests.filter(elemet => elemet.timestamp === uniqueElement)
            distribution.push({value: uniqueElement, count: minutesRequestsFilter.length, time: minutesRequestsFilter[0].time})
        })

        response.status(200).json(distribution);
    }

}