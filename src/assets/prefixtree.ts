// @ts-ignore
import { PrefixTreeNode } from './prefixtreenode';

export class PrefixTree {
    /* PrefixTree: A multi-way prefix tree that stores strings with efficient
    methods to insert a string into the tree, check if it contains a matching
    string, and retrieve all strings that start with a given prefix string. */
    strings?: string[];
    START_CHARACTER: string;
    root: PrefixTreeNode;
    size: number;

    constructor(strings: string[] = []) {
        /* Initialize this prefix tree and insert the given strings, if any. */
        this.strings = strings;
        // Constant for the start character stored in the prefix tree's root node
        this.START_CHARACTER = '';
        // Create a new root node with the start characater
        this.root = new PrefixTreeNode(this.START_CHARACTER);
        // Count the number of strings inserted into the tree
        this.size = 0;

        // Insert each string, if any where given
        if (Array.isArray(this.strings) && this.strings.length > 0) {
            for (let i = 0; i < this.strings!.length; i += 1) {
                console.log(`Inserting ${strings[i]} into the tree`);
                this.insert(strings[i]);
            }
        }
    }

    private findNode(str: string): [PrefixTreeNode, number] {
        /* Return a pair containing the deepest node in this prefix tree that
        matches the longest prefix of the given string and the node's depth.
        The depth returned is equal to the number of prefix characters matched.
        Search is done iteratively with a loop starting from the root node. */

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
            } else if (depth < 0) {
                // ^ edge case where you go to negative and all inputs show up
                depth -= 1; // received a char that doesn't exist
            }
        }
        return [node, depth];
    }

    private traverse(
        node: PrefixTreeNode,
        prefix: string,
        visit: (c: string) => void
    ): void {
        /* Traverse this prefix tree with recursive depth-first traversal.
        Start at the given node with the given prefix representing its path in
        this prefix tree and visit each node with the given visit function. */

        // Once the node is filled with characters and contains a terminal node, it'll append
        if (node.isTerminal()) {
            visit(prefix);
        }

        for (const char of node.children.keys()) {
            const next_node = node.getChild(char);
            this.traverse(next_node, prefix + char, visit);
        }
    }

    isEmpty(): boolean {
        /* Return True if this prefix tree is empty (contains no strings). */
        return this.size === 0;
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
        /* Insert the given string into this prefix tree. */
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

    complete(prefix: string): string[] {
        /* Return a list of all strings stored in this prefix tree that start
           with the given prefix string. */

        // Create a list of completions in prefix tree
        const completions: string[] = [];

        // Pull out the values returned from findNode
        const [node, depth] = this.findNode(prefix);

        // No node was found
        if (depth === 0) {
            return completions;
        }

        // A node was retrieved, traverse it.
        this.traverse(node, prefix, completions.push.bind(completions));
        return completions;
    }

    allTreeStrings(): string[] {
        /* Return a list of all strings stored in this prefix tree. */

        // Create a list of all strings in prefix tree
        const all_strings: string[] = [];
        this.traverse(this.root, '', all_strings.push.bind(all_strings));
        return all_strings;
    }

    displayPlayground(): void {
        // =======================
        // PLAYGROUND
        /* eslint-disable */
        // =======================
        const treeWithStrings = new PrefixTree(['YZ']);
        console.log('TREE WITH INIT STRINGS:', treeWithStrings.root.children);

        const tree = new PrefixTree();
        tree.insert('A');
        console.log('INSERTING "A" INTO TREE', tree);
        console.log('IS EMPTY?', tree.isEmpty());
        console.log('CONTAINS "A"?', tree.contains('A'));
        console.log('FINDING NODE "A"', tree.findNode('A'));
        console.log('ALL TREE STRINGS', tree.allTreeStrings());

        const strings: string[] = ['G'];
        const testTreeComplete = new PrefixTree(strings);
        console.log('TREE COMPLETE:', testTreeComplete.complete('G'));
    }
}

const A1 = new PrefixTree();
// A1.displayPlayground();
