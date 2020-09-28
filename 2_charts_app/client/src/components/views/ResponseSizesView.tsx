import React, { useContext, Fragment, useEffect } from 'react'
import EpaContext from '../../context/Epa/EpaContext';
import { ChartContainer, ChartInfoContainer, ChartViewContainer } from '../../styles/ChartStyles';
import ResponseSizesChart from '../charts/ResponseSizesChart';
import NavigationButton from '../ButtonStyles';
import Spinner from '../Spinner';
import ChartError from '../ChartError';

const ResponseSizesView: React.FC = (): JSX.Element => {
    const {fetchingData, actions, data, error, errorMessage} = useContext(EpaContext);
    const resourcePath = '/ans/sizes';

    useEffect(() => {
        const getData = async () => {
            await actions.FetchData(resourcePath);
        }; 
        getData();
        return () => {actions.RemoveContextData();};
    }, []);
    
    return (       
        <Fragment>
            <ChartViewContainer>
                <p>Distribution of request methods chart.</p>

                { 
                    (fetchingData || data.length === 0) 
                ? 
                    error ? null: <Spinner />
                : 
                    <ChartInfoContainer>

                        <ChartContainer>
                            <ResponseSizesChart /> 
                        </ChartContainer>

                        <div>
                            <p>To this standalone chart we can not extract useful, we can not apreciate any pattern in the data.<br/> Also we have decided to group the response sizes in periods of 50B to a better readability of the data due to the big dispersion of the classes frequencies.</p>
                        </div>
                        
                    </ChartInfoContainer>
                }

                {
                    error
                ?
                    <ChartError 
                        message={errorMessage} 
                        retryPath={resourcePath} 
                    />
                :
                    null
                }

                <NavigationButton 
                    path='/'
                    text='Go Back'
                /> 
            </ChartViewContainer>
        </Fragment>
    );
}

export default ResponseSizesView;