import React, { useState } from 'react';
import styled from 'styled-components';

import { SearchBar } from './SearchBar';
import { GlobalStyle } from '../utils/global-styles';

const DemoStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #42427b;
`;

const DemoCorpus = styled.input`
    background-color: #fff;
    padding: 9px;
    border-radius: 8px;
    margin-bottom: 15px;
`;

export function App(): JSX.Element {
    const [corpus, setCorpus] = useState([]);

    const handleFileRead = (e: any) => {
        const content = e.target.result.split('\n');
        setCorpus(content);
    };

    const handleFileUpload = (file: any) => {
        const reader = new FileReader();
        reader.onloadend = handleFileRead;
        reader.readAsText(file);
    };

    return (
        <>
            <GlobalStyle />
            <DemoStyle>
                <DemoCorpus
                    type='file'
                    accept='.txt'
                    onChange={(e) => handleFileUpload(e.target.files![0])}
                />
                <SearchBar corpus={corpus} />
            </DemoStyle>
        </>
    );
}
