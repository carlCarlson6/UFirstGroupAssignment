import { IEpaContext } from "../models/IEpaContext";

export const epaInitialState: Partial<IEpaContext> = {
    data: [], 
    fetchingData: false,
    error: false,
    errorMessage: ''
}