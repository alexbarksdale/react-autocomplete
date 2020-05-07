import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { SearchBar } from '../SearchBar';
import { useAutocomplete } from '../useAutocomplete';

const DemoStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #42427b;

    div {
        width: 500px;
    }
`;

const DemoTitle = styled.h1`
    color: #fff;
    font-size: 20px;
    letter-spacing: 0.3px;
    margin-bottom: 16px;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 0px 2px 0px #a8a8a8;
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

const Divider = styled.div`
    height: 2px;
    width: 100px;
    background-color: #7070ba;
    margin: 25px 0px;
`;

const HookInput = styled.input`
    color: #3d3d3d;
    font-size: 16px;
    padding: 13px;
    border: none;
    border-radius: 8px;
    box-sizing: border-box;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #878787;
        font-size: 16px;
    }
`;

const HookItems = styled.h1`
    font-size: 16px;
    color: #fff;
    margin-top: 15px;
`;

export function SearchDemo(): JSX.Element {
    const [corpus, setCorpus] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');
    const [completions] = useAutocomplete(searchTerm, corpus);

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
            <div>
                <DemoTitle>Search Bar Example</DemoTitle>
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
                <Divider />
                <DemoTitle>Hook Example</DemoTitle>
                <HookInput
                    type='text'
                    placeholder='Hook search...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {completions.map((item, i) => {
                    return <HookItems key={i}>{item}</HookItems>;
                })}
            </div>
        </DemoStyle>
    );
}
