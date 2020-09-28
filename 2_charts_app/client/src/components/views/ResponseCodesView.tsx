import React, { useContext, Fragment, useEffect } from 'react'
import EpaContext from '../../context/Epa/EpaContext';
import { ChartContainer, ChartInfoContainer, ChartViewContainer } from '../../styles/ChartStyles';
import ResponseCodesChart from '../charts/ResponseCodesChart';
import NavigationButton from '../ButtonStyles';
import Spinner from '../Spinner';
import ChartError from '../ChartError';

const ResponseCodesView: React.FC = (): JSX.Element => {
    const {fetchingData, actions, data, error, errorMessage} = useContext(EpaContext);
    const resourcePath = '/ans/codes';

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
                <p>Distribution of response codes chart.</p>

                { 
                    (fetchingData || data.length === 0) 
                ? 
                    error ? null: <Spinner />
                : 
                    <ChartInfoContainer>

                        <ChartContainer>
                            <ResponseCodesChart /> 
                        </ChartContainer>

                        <div>
                            <p>Really easily we see that allmost all the responses are with a 200 code.</p>
                            <p>To a lesser extent we have responses with a 3XX code and very insignificant with a 4XX or 5XX response code.</p>
                            <p>A curve following the tops of the histrogram bars has been added to better see the diferences between the classes of the distribution.</p>
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

export default ResponseCodesView;