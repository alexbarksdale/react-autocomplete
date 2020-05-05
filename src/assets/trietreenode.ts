export class TrieTreeNode {
    /* TrieTreeNode: A node for use in a trie tree that stores a single
    character from a string and a structure of children nodes below it, which
    associates the next character in a string to the next node along its path from
    the tree's root node to a terminal node that marks the end of the string. */
    terminal: boolean;
    character?: string;
    children: Map<string, TrieTreeNode>;

    constructor(character?: string) {
        /* Initialize this trie tree node with the given character value, an
         empty structure of children nodes, and a boolean terminal property. */
        this.character = character;
        this.children = new Map<string, TrieTreeNode>();
        this.terminal = false;
    }

    isTerminal(): boolean {
        /* Return True if this trie tree node terminates a string. */
        return this.terminal;
    }

    numChildren(): number {
        /* Return the number of children nodes this trie tree node has. */
        return this.children.size;
    }

    hasChild(character: string): boolean {
        /* Return True if this trie tree node has a child node that
        represents the given character amongst its children. */
        return this.children.has(character);
    }

    getChild(character: string): TrieTreeNode {
        /* Return this trie tree node's child node that represents the given
           character if it is amongst its children, or raise ValueError if not. */
        if (this.hasChild(character)) {
            return this.children.get(character)!;
        }
        throw new Error(`No child exists for: ${character}`);
    }

    addChild(character: string, child_node: TrieTreeNode): void {
        /* Add the given character and child node as a child of this node, or
           raise ValueError if given character is amongst this node's children. */
        if (!this.hasChild(character)) {
            this.children.set(character, child_node);
        } else {
            throw new Error(`Child exists for: ${character}`);
        }
    }

    /* @param {boolean} - test if addChild throws an error for adding an existing child */
    displayPlayground(testAddError: boolean = false): void {
        // =======================
        // PLAYGROUND
        /* eslint-disable */
        // =======================
        const T1 = new TrieTreeNode('A');
        const T2 = new TrieTreeNode('B');
        console.log('INITIALIZED A NODE "T1":', T1);
        console.log('INITIALIZED A NODE "T2":', T2, '\n');

        T1.children.set('Y', T1);
        console.log('SETTING A CHILD "Y" to T1:', T1);

        console.log('T1 NUMBER OF CHILDREN:', T1.numChildren());
        console.log('T1 HAS CHILD "G"?', T1.hasChild('G'));
        console.log('T1 HAS CHILD "Y"?', T1.hasChild('Y'));
        console.log('GETTING CHILD in T1', T1.getChild('Y'));

        T1.addChild('A', T2);
        console.log('ADDING A CHILD to T1 WITH T2:', T1.children);

        if (testAddError) {
            T1.addChild('A', T2);
            console.log('ADDING AN EXISTING CHILD:', T1.children); // throws an error
        }
    }
}

// const B1 = new TrieTreeNode();
// B1.displayPlayground();
