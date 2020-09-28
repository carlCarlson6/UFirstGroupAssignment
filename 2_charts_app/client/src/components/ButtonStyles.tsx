import React from 'react';
import { useHistory } from 'react-router-dom';
import { INavigationButton } from '../models/INavigationButton';
import { Button, ButtonContainer } from '../styles/NavigationButtonStyles';

const NavigationButton: React.FC<INavigationButton> = ({path, text}): JSX.Element => {
    const history = useHistory();

    return (
        <ButtonContainer>
            
            <Button
                onClick = {() => history.push(path)}
            >
                {text}
            </Button>

        </ButtonContainer>
    );
}

export default NavigationButton;