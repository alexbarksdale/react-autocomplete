import { PrefixTreeNode } from './prefixtreenode';

export class PrefixTree {
    /* PrefixTree: A multi-way prefix tree that stores strings with efficient
    methods to insert a string into the tree, check if it contains a matching
    string, and retrieve all strings that start with a given prefix string. */
    strings?: string[];
    START_CHARACTER: string;
    root: PrefixTreeNode;
    size: number;

    constructor(strings: string[]) {
        /* Initialize this prefix tree and insert the given strings, if any. */
        this.strings = strings;
        // Constant for the start character stored in the prefix tree's root node
        this.START_CHARACTER = '';
        // Create a new root node with the start characater
        this.root = new PrefixTreeNode(this.START_CHARACTER);
        // Count the number of strings inserted into the tree
        this.size = 0;

        // Insert each string, if any where given
        if (Array.isArray(strings) && this.strings.length === 0) {
            for (let i = 0; i < this.strings.length; i += 1) {
                // TODO: insert string
                console.log('Constructor for loop', this.strings[i]);
            }
        }
    }

    is_empty(): number {
        /* Return True if this prefix tree is empty (contains no strings). */
        return this.size;
    }

    contains(str: string) {
        /* Insert the given string into this prefix tree. */
        let node = this.root;

        for (const char of str) {
            if (node.has_child(char)) {
                node = node.get_child(char);
            } else {
                return false;
            }
        }
        return node.is_terminal();
    }
}
