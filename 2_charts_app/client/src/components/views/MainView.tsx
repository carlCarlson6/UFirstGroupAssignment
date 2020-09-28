import React, { Fragment } from 'react';
import { ButtonsContainer } from '../../styles/MainViewStyles';
import NavigationButton from '../ButtonStyles';

const MainView: React.FC = (): JSX.Element => {
    
    return (
        <Fragment>
                        
            <p>Select the chart you want to visualize.</p>
            
 
            <ButtonsContainer>
                <NavigationButton 
                    path='/request/time'
                    text='Requests per Minute'
                /> 

                <NavigationButton 
                    path='/request/methods'
                    text='Request Methods '
                />
                
                <NavigationButton 
                    path='/response/codes'
                    text='Response Codes'
                />

                <NavigationButton 
                    path='/response/sizes'
                    text='Response Sizes'
                />
            </ButtonsContainer>

            <p>Due to the amount of data that has to be processed and infrastructure constraints the app can take up to one minute to display the charts.</p>

        </Fragment>
    );
}

export default MainView;