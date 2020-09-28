import {EpaActionTypes} from '../../common/ContextActionTypes';

const epaReducer = (state: any, action: {type: any, payload: any}) => {
    switch(action.type) {
        
        case EpaActionTypes.FetchingData:
            return { ...state, fetchingData: true, error: false };

        case EpaActionTypes.OkFetchData:
            return { ...state, fetchingData: false,  data: action.payload}; 
    
        case EpaActionTypes.KoFetchingData:
            return { ...state, fetchingData: false, error: true, errorMessage: action.payload };

        case EpaActionTypes.RemoveContextData:
            return { ...state, data: [], fetchingData: false};
    
        default: return state;
    }
}

export default epaReducer