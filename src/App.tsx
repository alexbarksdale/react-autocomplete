import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './utils/global-styles';
import { BaseRouter } from './utils/router';
import { Navigation } from './components/navigation/Navigation';

export function App(): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Navigation />
                <BaseRouter />
            </BrowserRouter>
        </>
    );
}
