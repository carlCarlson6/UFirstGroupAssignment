import Axios, { AxiosResponse, Cancel, CancelTokenSource, CancelTokenStatic } from 'axios';
import {Dispatch} from 'react';
import httpClient from '../../common/HttpClient';
import { Distribution, TimeDistribution } from '../../models/Distributions';
import {EpaActionTypes} from '../../common/ContextActionTypes';

export class EpaActions {
    cancel: CancelTokenSource;
    
    constructor(private dispatch: Dispatch<{type: any, payload:any}>) {
        this.cancel = Axios.CancelToken.source();
    }

    async FetchData(path: string): Promise<Distribution|TimeDistribution|void> {
        try {
            this.dispatch({type: EpaActionTypes.FetchingData, payload: null})
            
            console.log('executing request');
            const response: AxiosResponse<Distribution|TimeDistribution>|void = await httpClient
                .get(path, {cancelToken: this.cancel.token})
                .catch((thrown) => {
                    if(Axios.isCancel(thrown)) { console.log('Request canceled', thrown.message);}
                    else { throw new Error(thrown.message)}
                }
            );
            console.log('finish request');

            if(!response) { return; }

            this.dispatch({type: EpaActionTypes.OkFetchData, payload: response.data})
            return response.data;
        } catch(error) {
            console.log('error on the request');
            this.dispatch({type: EpaActionTypes.KoFetchingData, payload: 'Something went wrong.'})
            console.log(error);
        }
    }

    RemoveContextData(): void {
        this.dispatch({type: EpaActionTypes.RemoveContextData, payload: null});
        this.cancel.cancel('unmounting component')
    }
}