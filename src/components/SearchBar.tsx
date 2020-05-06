import React, { useState, useEffect, Dispatch, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { FaSearch, FaChevronRight } from 'react-icons/fa';

import { TrieTree } from '../assets/trietree';

// **** SEARCH BAR STYLES ****
const SearchContainer = styled.div`
    display: flex;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0px 0px 11px 0px #d3d3d3;

    form {
        width: 355px;
    }

    span {
        margin: 14px 0px 14px 14px;
        position: absolute;
    }
`;

const SearchInput = styled.input`
    color: #3d3d3d;
    font-size: 16px;
    width: -webkit-fill-available;
    margin-left: 30px;
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

const SearchIcon = styled(FaSearch)`
    color: #3d3d3d;
`;

const SearchResultIcon = styled(FaChevronRight)`
    color: #3d3d3d;
    margin-right: 14px;
`;

const SearchListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0px 12px 12px 12px;
    form {
        width: 285px;
    }

    li {
        margin-top: 9px;

        a {
            color: #3d3d3d;
            display: flex;
            align-items: center;
            width: auto;
            padding: 7px;
            border-radius: 8px;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &:hover {
                transition: all 0.3s ease-in-out;
                background-color: #eaeaea;
            }
        }
    }
`;

const ListingDivider = styled.div`
    height: 2px;
    background-color: #eaeaea;
`;
// **** END SEARCH BAR STYLES ****

// Ensure the user gives a valid input type
type inputType =
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'url'
    | 'week';

// State properties in this component
interface AppState {
    searchTree: TrieTree;
    searchTerm: string;
    searchCorpus?: boolean;
}

// Props in this component
interface AppProps {
    placeholder?: string;
    type?: inputType;
    corpus?: string[] | undefined;
}

const handleTermSubmit = (
    e: FormEvent<HTMLFormElement>,
    search: AppState,
    setSearch: Dispatch<React.SetStateAction<AppState>>
): void => {
    e.preventDefault();

    const { searchTree, searchTerm } = search;
    searchTree.insert(searchTerm);
    setSearch({ searchTree, searchTerm: '' });
};

const handleTermChange = (
    e: ChangeEvent<HTMLInputElement>,
    searchTree: TrieTree,
    setSearch: Dispatch<React.SetStateAction<AppState>>
): void => {
    setSearch({ searchTree, searchTerm: e.target.value });
};

const handleCorpus = (
    searchTerm: string,
    setSearch: Dispatch<React.SetStateAction<AppState>>,
    corpus: string[]
) => {
    setSearch({
        searchTree: new TrieTree(corpus),
        searchTerm: searchTerm,
        searchCorpus: true,
    });
};

const displayResults = (searchResults: string[]): JSX.Element[] => {
    const resultListElement = searchResults.map((result, i) => {
        return (
            <li key={i}>
                <a href='REPLACE_ME'>
                    <SearchResultIcon />
                    {result}
                </a>
            </li>
        );
    });
    return resultListElement;
};

export function SearchBar(props: AppProps): JSX.Element {
    // Destructure the values out of props and give default values
    const { placeholder = 'Search...', type = 'text', corpus = [] } = props;

    const [search, setSearch] = useState<AppState>({
        searchTree: new TrieTree(),
        searchTerm: '',
        searchCorpus: false,
    });

    // Destructure the values out of state
    const { searchTree, searchTerm, searchCorpus } = search;

    // Check if a corpus was added to the tree
    if (!searchCorpus && corpus.length > 0) {
        // Creates a new searchTree with the corpus
        handleCorpus(searchTerm, setSearch, corpus);
    }

    // Retrieves all the search term completions
    const searchResults: string[] = searchTree.complete(searchTerm);

    // PLAYGROUND - remove later
    console.log('TREE:', searchTree);
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
                <SearchIcon />
            </span>
            <form onSubmit={(e) => handleTermSubmit(e, search, setSearch)}>
                <SearchInput
                    type={type}
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={(e) => handleTermChange(e, searchTree, setSearch)}
                />
                {searchResults.length > 0 ? (
                    <>
                        <ListingDivider />
                        <SearchListContainer>
                            {displayResults(searchResults)}
                        </SearchListContainer>
                    </>
                ) : null}
            </form>
        </SearchContainer>
    );
}
