import React from 'react';
import styled from 'styled-components';

import { SearchBar } from './SearchBar';
import { GlobalStyle } from '../utils/global-styles';

const DemoStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #42427b;
`;

export function App(): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <DemoStyle>
                <SearchBar />
            </DemoStyle>
        </>
    );
}
