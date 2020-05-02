import React, { useState, useEffect, Dispatch, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import { PrefixTree } from '../assets/prefixtree';

// **** SEARCH BAR STYLES ****
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
// **** END SEARCH BAR STYLES ****

/* [TODOS]
Functionality to add:
TODO: Customizable placeholder
TODO: Load corpus
TODO: Create a callback on submit
TODO: Add type change Ex: text, password, etc
TODO: Disable searchicon
TODO: Add exact match option if possible?
TODO: Convert to CSS
*/

interface AppState {
    searchTree: PrefixTree;
    searchTerm: string;
}

const handleTermSubmit = (
    e: FormEvent<HTMLFormElement>,
    search: AppState,
    setSearch: Dispatch<React.SetStateAction<AppState>>
): void => {
    e.preventDefault();

    // Destructure the values out of state
    const { searchTree, searchTerm } = search;
    searchTree.insert(searchTerm);
    setSearch({ searchTree, searchTerm: '' });
};

const handleTermChange = (
    e: ChangeEvent<HTMLInputElement>,
    searchTree: PrefixTree,
    setSearch: Dispatch<React.SetStateAction<AppState>>
): void => {
    setSearch({ searchTree, searchTerm: e.target.value });
};

export function SearchBar(): JSX.Element {
    const [search, setSearch] = useState<AppState>({
        searchTree: new PrefixTree(),
        searchTerm: '',
    });

    // Destructure the values out of state
    const { searchTree, searchTerm } = search;

    // Retrieves all the search term completions
    const searchResults = searchTree.complete(searchTerm);

    // PLAYGROUND - remove later
    console.log('TREE:', search.searchTree);
    console.log('TERM:', searchTerm);
    console.log('RESULTS:', searchResults);

    const T1 = 'Hi';
    const T2 = 'Hello';
    searchTree.insert(T1);
    searchTree.insert(T2);
    // END PLAYGROUND

    // Prevents annoying LastPass error when you submit
    useEffect(() => {
        document.addEventListener('keydown', (e) => e.stopPropagation(), true);

        // Unmount the event listener
        return () => {
            document.removeEventListener('keydown', (e) => e.stopPropagation(), true);
        };
    }, []);

    return (
        <SearchContainer>
            <span>
                <FaSearch />
            </span>
            <form onSubmit={(e) => handleTermSubmit(e, search, setSearch)}>
                <SearchInput
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={(e) => handleTermChange(e, searchTree, setSearch)}
                />
            </form>

            <h1>{search.searchTerm}</h1>
        </SearchContainer>
    );
}
