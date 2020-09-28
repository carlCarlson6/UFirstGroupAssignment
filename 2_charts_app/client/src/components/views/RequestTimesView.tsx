import React, { Fragment, useContext, useEffect } from 'react';
import EpaContext from '../../context/Epa/EpaContext';
import { ChartContainer, ChartInfoContainer, ChartViewContainer } from '../../styles/ChartStyles';
import RequestTimesChart from '../charts/RequestTimesChart';
import NavigationButton from '../ButtonStyles';
import Spinner from '../Spinner';
import ChartError from '../ChartError';

const RequestTimesView: React.FC = (): JSX.Element => {
    const {fetchingData, actions, data, error, errorMessage} = useContext(EpaContext);
    const resourcePath = '/req/time';

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
                <p>Requests per minute chart.</p>
                
                { 
                    (fetchingData || data.length === 0) 
                ? 
                    error ? null: <Spinner />
                :   
                    <ChartInfoContainer>
                    
                        <ChartContainer>
                            <RequestTimesChart />
                        </ChartContainer>

                        <div>
                            <p>From this visiual representation we can see that the time period with the highest activity was from the 08:45 to 18:00 reaching a peak of 158 request at 14:27.</p>
                            <p>After this period theres a mid tier timelapse of requests.</p>
                            <p>Previous of that we have a low period of stress from 00:00 to 08:00 when the requests starts increasing.</p>
                            <p>This frequencies match with the periods of human activity and time labor.</p>
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

export default RequestTimesView;