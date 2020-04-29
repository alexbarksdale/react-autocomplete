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
                // TODO: Remove later
                console.log(`Inserting ${strings[i]} into the tree`);
                this.insert(strings[i]);
            }
        }
    }

    isEmpty(): number {
        /* Return True if this prefix tree is empty (contains no strings). */
        return this.size;
    }

    contains(str: string): boolean {
        /* Insert the given string into this prefix tree. */
        let node = this.root;

        for (const char of str) {
            if (node.hasChild(char)) {
                node = node.getChild(char);
            } else {
                return false;
            }
        }
        return node.isTerminal();
    }

    insert(str: string): void {
        let node = this.root;

        for (const char of str) {
            if (node.hasChild(char)) {
                node = node.getChild(char); // Next node
            } else {
                node.addChild(char, new PrefixTreeNode(char)); // New node
                node = node.getChild(char); // Next node
            }
        }

        if (!node.isTerminal()) {
            this.size += 1;
            node.terminal = true; // Last node is terminal
        }
    }

    private findNode(str: string): [PrefixTreeNode, number] {
        // Match the empty string
        if (str.length === 0) {
            return [this.root, 0];
        }

        // Start with the root node and count depth
        let [node, depth] = [this.root, 0];
        for (const char of str) {
            if (node.hasChild(char)) {
                node = node.getChild(char); // Found the char, go next
                depth += 1;
            }
        }
        return [node, depth];
    }

    complete(prefix: string): string[] {
        // Create a list of completions in prefix tree
        const completions: string[] = [];

        // Pull out the values returned from findNode
        const [node, depth] = this.findNode(prefix);

        // No node was found
        if (depth === 0) {
            return completions;
        }

        // A node was retrieved, traverse it.
        this.traverse(node, prefix, completions.push);
        return completions;
    }

    private traverse(
        node: PrefixTreeNode,
        prefix: string,
        visit: (c: string) => void
    ): void {
        if (node.isTerminal()) {
            visit(prefix);
        }

        for (const char of node.children.keys()) {
            const next_node = node.getChild(char);
            this.traverse(next_node, prefix + char, visit);
        }
    }
}
