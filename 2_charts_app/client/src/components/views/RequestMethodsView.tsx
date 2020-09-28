import React, { Fragment, useContext, useEffect } from 'react'
import EpaContext from '../../context/Epa/EpaContext';
import { ChartContainer, ChartInfoContainer, ChartViewContainer } from '../../styles/ChartStyles';
import RequestMethodsChart from '../charts/RequestMethodsChart';
import NavigationButton from '../ButtonStyles';
import Spinner from '../Spinner';
import ChartError from '../ChartError';

const RequestMethodsView: React.FC = (): JSX.Element => {
    const {fetchingData, actions, data, error, errorMessage} = useContext(EpaContext);
    const resourcePath = '/req/methods';

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
                <p>Distribution of the request methods. <br/>By clicking on the legend you can filter the diferent request methods.</p>


                { 
                    (fetchingData || data.length === 0) 
                ? 
                    error ? null: <Spinner />
                : 
                    <ChartInfoContainer>

                        <ChartContainer>
                            <RequestMethodsChart/> 
                        </ChartContainer>

                        <div>
                            <p>With an easy look to the chart we can appreciate that the vast majority of request are GET requests, this correspond to the 96.36% of the request.</p>
                            <p>Next we have that the POST request constitute 3.39%.</p>
                            <p>Al last the HEAD an invalid request are the 0.22% and 0.0001% respectively.</p>
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

export default RequestMethodsView;