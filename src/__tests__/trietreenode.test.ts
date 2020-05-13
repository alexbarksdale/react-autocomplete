import { TrieTreeNode } from '../assets/trietreenode';

test('Test init and properties', () => {
    const CHARACTER = 'A';
    const node = new TrieTreeNode(CHARACTER);

    // Verify that our node contains CHARACTER on init
    expect(node.character).toContain(CHARACTER);
    expect(node.character!.length).toBe(1);
    expect(node.terminal).toBe(false);
});

test('Test child methods', () => {
    // Create a node 'A' and check if there are no children
    const node_A = new TrieTreeNode('A');
    expect(node_A.numChildren()).toBe(0);
    expect(node_A.hasChild('B')).toBe(false);

    // Create a node 'B' and add it as a child to node_A
    const node_B = new TrieTreeNode('B');
    node_A.addChild('B', node_B);

    // Verify that node_A has node_B as a child
    expect(node_A.numChildren()).toBe(1);
    expect(node_A.hasChild('B')).toBe(true);
    expect(node_A.getChild('B')).toEqual(node_B);
    expect(node_A.isTerminal()).toBe(false);
});
