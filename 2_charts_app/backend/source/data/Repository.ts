import { IEpaData } from "../core/models/IEpaData";
import { IRepository } from "../core/repositories/IRepository";
import { EpaDataModel } from "./EpaDataModel";


export class Repository implements IRepository<IEpaData> {
   
    async GetAllData(): Promise<Array<IEpaData>> {
        const documents = await EpaDataModel.find();

        const epaData = documents.map(document => document.toObject())

        return epaData;
    }

}