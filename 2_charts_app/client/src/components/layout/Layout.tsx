import React, { Fragment } from 'react';
import { LayoutContainer } from '../../styles/LayoutStyles';
import Header from './Header';

const Layout: React.FC = ({children}): JSX.Element => {
    
    return (
        <Fragment>
            <LayoutContainer>
                <Header />

                <main>
                    {children}
                </main>
            </LayoutContainer>
        </Fragment>
    );
}

export default Layout;