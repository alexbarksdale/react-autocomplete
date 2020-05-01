import React, { useState, Dispatch, ChangeEvent } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import { PrefixTree } from '../assets/prefixtree';

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
TODO: Add exact match option if possible?
*/
interface AppState {
    searchTree: PrefixTree;
    searchTerm: string;
}

// const handleChange = (
//     e: ChangeEvent<HTMLInputElement>,
//     setSearch: Dispatch<React.SetStateAction<AppState>>
// ): void => {
//     setSearch({ searchTerm: e.target.value });
// };

export function SearchBar(): JSX.Element {
    const [search, setSearch] = useState<AppState>({
        searchTree: new PrefixTree(),
        searchTerm: '',
    });

    // Pulling the values out of state
    const { searchTree, searchTerm } = search;

    const searchResults = searchTree.complete(searchTerm);

    // PLAYGROUND - remove later
    console.log('TREE:', search.searchTree);
    console.log('TERM:', searchTerm);
    console.log('RESULTS:', searchResults);

    const B1 = 'Hi';
    const T2 = 'Hello';
    searchTree.insert(B1);
    searchTree.insert(T2);
    // END PLAYGROUND

    return (
        <SearchContainer>
            <span>
                <FaSearch />
            </span>
            <SearchInput
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearch({ searchTree, searchTerm: e.target.value })}
            />

            <h1>{search.searchTerm}</h1>
        </SearchContainer>
    );
}
