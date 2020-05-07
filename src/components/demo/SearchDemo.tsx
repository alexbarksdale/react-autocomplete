import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { SearchBar } from '../SearchBar';

const DemoStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #42427b;
`;

const SearchCorpusInput = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
`;

const SearchCorpusBtn = styled.button`
    border: none;
    cursor: pointer;
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 800;
    letter-spacing: 0.5px;
    background-color: #3fc73f;
    padding: 10px 25px;
    border-radius: 8px;
    margin-bottom: 15px;
    border-bottom: 3px solid #15824b;
    transition: all 0.3s ease-in-out;

    &:hover,
    &:focus {
        background-color: #2cb42c;
        padding: 10px 35px;
        border-bottom: 3px solid #0d6e3d;
        transition: all 0.3s ease-in-out;
        outline: none;
    }
`;

export function SearchDemo(): JSX.Element {
    const [corpus, setCorpus] = useState([]);

    const fileInput = useRef<HTMLInputElement>(null);

    const triggerFileUpload = () => {
        if (fileInput.current === null) return;
        fileInput.current.click();
    };

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
        <DemoStyle>
            <SearchCorpusInput
                type='file'
                accept='.txt'
                onChange={(e) => handleFileUpload(e.target.files![0])}
                ref={fileInput}
            />
            <SearchCorpusBtn onClick={() => triggerFileUpload()}>
                Add Corpus
            </SearchCorpusBtn>
            <SearchBar corpus={corpus} />
        </DemoStyle>
    );
}
