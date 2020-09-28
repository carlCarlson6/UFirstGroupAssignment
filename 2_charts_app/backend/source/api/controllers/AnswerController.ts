import { IEpaData } from "../../core/models/IEpaData";
import { IRepository } from "../../core/repositories/IRepository";
import {Request, Response } from "express";
import { getDistributionOfElements } from "../../common/utils/getDistributionOfElements";
import { Distribution } from "../../common/types";
import { groupDistribution } from "../../common/utils/groupDistribution";

export class AnswerController {
    
    constructor(private repository: IRepository<IEpaData>) { }

    async GetResponseCodesDistribution(request:Request, response:Response) {
        const allEpaData: Array<IEpaData> = await this.repository.GetAllData();

        const allCodes: Array<number> = allEpaData.map(epa => epa.response.code);
        const codesDistribution: Distribution = getDistributionOfElements(allCodes);

        response.status(200).json(codesDistribution);
    }

    async GetResponseSizesDistribution(request:Request, response:Response) {
        const allEpaData: Array<IEpaData> = await this.repository.GetAllData();
        const filterAllEpaData: Array<IEpaData> = allEpaData.filter(epa => epa.response.code === 200 && epa.response.docSize < 1000);

        const sizes: Array<number> = filterAllEpaData.map(epa => epa.response.docSize);
        const sizesDistribution: Distribution = getDistributionOfElements(sizes);

        const groupSizesDistribution: Distribution = groupDistribution(0, 1000, 20, sizesDistribution);

        response.status(200).json(groupSizesDistribution);
    }

}