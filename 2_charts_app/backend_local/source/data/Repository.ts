import { IEpaData } from "../core/models/IEpaData";
import { IRepository } from "../core/repositories/IRepository";
import { default as epaDataList } from './epa-http.json';


export class Repository implements IRepository<IEpaData> {

    async GetAllData(): Promise<Array<IEpaData>> {
        return epaDataList as Array<IEpaData>;
    }

}