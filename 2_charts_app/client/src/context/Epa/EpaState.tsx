import { stat } from 'fs';
import React from 'react';
import { epaInitialState } from '../../common/InitialStates';
import { EpaActions } from './EpaActions';
import EpaContext from './EpaContext';
import epaReducer from './EpaReducer';

const EpaState = (props: any) => {
    const [state, dispatch] = React.useReducer(epaReducer, epaInitialState);

    return (
        <EpaContext.Provider
            value = {{
                data: state.data,
                actions: new EpaActions(dispatch),
                fetchingData: state.fetchingData,
                error: state.error,
                errorMessage: state.errorMessage
            }}
        >
            {props.children}
        </EpaContext.Provider>
    );    
}

export default EpaState;