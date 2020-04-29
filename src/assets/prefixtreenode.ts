export class PrefixTreeNode {
    /* PrefixTreeNode: A node for use in a prefix tree that stores a single
    character from a string and a structure of children nodes below it, which
    associates the next character in a string to the next node along its path from
    the tree's root node to a terminal node that marks the end of the string. */
    terminal: boolean;
    character?: string;
    children: Map<string, PrefixTreeNode>;

    constructor(character?: string) {
        /* Initialize this prefix tree node with the given character value, an
         empty structure of children nodes, and a boolean terminal property. */
        this.character = character;
        this.children = new Map<string, PrefixTreeNode>();
        this.terminal = false;
    }

    is_terminal(): boolean {
        /* Return True if this prefix tree node terminates a string. */
        return this.terminal;
    }

    num_children(): number {
        /* Return the number of children nodes this prefix tree node has. */
        return this.children.size;
    }

    has_child(character: string): boolean {
        /* Return True if this prefix tree node has a child node that
        represents the given character amongst its children. */
        return this.children.has(character);
    }

    get_child(character: string): PrefixTreeNode {
        /* Return this prefix tree node's child node that represents the given
           character if it is amongst its children, or raise ValueError if not. */
        if (this.has_child(character)) {
            return this.children.get(character)!;
        }
        throw new Error(`No child exists for: ${character}`);
    }

    add_child(character: string, child_node: PrefixTreeNode): void {
        /* Add the given character and child node as a child of this node, or
           raise ValueError if given character is amongst this node's children. */
        if (!this.has_child(character)) {
            this.children.set(character, child_node);
        } else {
            throw new Error(`Child exists for: ${character}`);
        }
    }

    /* @param {boolean} test if add_child throws an error for adding an existing child */
    display_playground(testAddError: boolean = false): void {
        // =======================
        // PLAYGROUND
        /* eslint-disable */
        // =======================
        const T1 = new PrefixTreeNode('A');
        const T2 = new PrefixTreeNode('B');
        console.log('INITIALIZED A NODE "T1":', T1);
        console.log('INITIALIZED A NODE "T2":', T2, '\n');

        T1.children.set('Y', T1);
        console.log('SETTING A CHILD "Y" to T1:', T1);

        console.log('T1 NUMBER OF CHILDREN:', T1.num_children());
        console.log('T1 HAS CHILD "G"?', T1.has_child('G'));
        console.log('T1 HAS CHILD "Y"?', T1.has_child('Y'));

        T1.add_child('A', T2);
        console.log('ADDING A CHILD to T1 WITH T2:', T1.children);

        if (testAddError) {
            T1.add_child('A', T2);
            console.log('ADDING AN EXISTING CHILD:', T1.children); // throws an error
        }
    }
}

const B1 = new PrefixTreeNode();
B1.display_playground();
