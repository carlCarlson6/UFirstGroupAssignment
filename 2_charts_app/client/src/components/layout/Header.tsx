import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderStyled, HeaderTitle, Logo } from '../../styles/LayoutStyles';
import uFirstLogo from '../../styles/images/header-brand.svg';

const Header: React.FC = (): JSX.Element => {
    const history = useHistory();

    const redirectToInit = () => {
        history.push('/')
    }

    return (
        <HeaderStyled>

            <Logo 
                src={uFirstLogo} 
                onClick={redirectToInit} 
            />

            <HeaderTitle
                onClick={redirectToInit}
            >
                FIRST CHARTS APP
            </HeaderTitle>

        </HeaderStyled>
    )
};

export default Header;