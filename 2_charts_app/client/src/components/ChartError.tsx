import React, { useContext } from 'react';
import EpaContext from '../context/Epa/EpaContext';
import { ChartErrorConatiner } from '../styles/ChartStyles';
import { Button, ButtonContainer } from '../styles/NavigationButtonStyles';
 
const ChartError: React.FC<{message: string, retryPath: string}>= ({message, retryPath}) => {
    const {actions} = useContext(EpaContext);

    return (
        <ChartErrorConatiner>
            <ButtonContainer>
                <Button
                    onClick = {() => actions.FetchData(retryPath)}
                >
                    {message + ' Click to try again.'}
                </Button>
            </ButtonContainer>
        </ChartErrorConatiner>
    );
}
 
export default ChartError;