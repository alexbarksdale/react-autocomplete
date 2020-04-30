import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 8px;
    background-color: #fff;
    width: 286px;
    padding: 5px;

    span {
        margin-left: 14px;
    }
`;

const SearchInput = styled.input`
    border: none;
    padding: 13px;
    border-radius: 8px;
    width: 100%;
    font-size: 16px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        font-size: 16px;
    }
`;

/*
Props to add:
TODO: Customizable placeholder
TODO: Load corpus
TODO: Create a callback on submit
TODO: Add type change Ex: text, password, etc
TODO: Disable searchicon
*/

export function SearchBar(): JSX.Element {
    return (
        <SearchContainer>
            <span>
                <FaSearch />
            </span>
            <SearchInput placeholder='Search...' />
        </SearchContainer>
    );
}
