import { EpaActions } from "../context/Epa/EpaActions";
import { Distribution, TimeDistribution } from "./Distributions";

export interface IEpaContext {
    data: Distribution | TimeDistribution
    actions: EpaActions
    fetchingData: boolean
    error: boolean;
    errorMessage: string;
}