import { useState, useEffect } from 'react';
import { TrieTree } from '../assets/trietree';

// State properties in this component
interface AppState {
    searchTree: TrieTree;
    searchCorpus?: boolean;
}

export function useAutocomplete(searchTerm: string, corpus: string[] = []): string[][] {
    // Create component state
    const [search, setSearch] = useState<AppState>({
        searchTree: new TrieTree(),
        searchCorpus: false,
    });

    // Destructure the values out of state
    const { searchTree, searchCorpus } = search;

    useEffect(() => {
        // Adds corpus to the tree if added.
        if (!searchCorpus && corpus.length > 0) {
            setSearch({
                searchTree: new TrieTree(corpus),
                searchCorpus: true,
            });
        }
    }, [corpus]);

    if (searchTerm.length > 0) {
        return [searchTree.complete(searchTerm)];
    }

    return [[]];
}
