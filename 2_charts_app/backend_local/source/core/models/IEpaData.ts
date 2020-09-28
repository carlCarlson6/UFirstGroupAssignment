import { IEpaDate } from "./IEpaDate";
import { IEpaResponse } from "./IEpaResponse";
import { IEpaRequest } from "./IEpaRequest";

export interface IEpaData {
    host: string;
    date: IEpaDate;
    request: IEpaRequest;
    response: IEpaResponse;
}