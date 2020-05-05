import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../utils/global-styles';
import { BaseRouter } from '../utils/router';
import { DemoNav } from './demo_nav/DemoNav';

export function App(): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <DemoNav />
                <BaseRouter />
            </BrowserRouter>
        </>
    );
}
