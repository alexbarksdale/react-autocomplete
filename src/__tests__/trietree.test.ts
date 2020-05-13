import { TrieTree } from '../assets/trietree';

test('Tree init and properties', () => {
    // Create a tree with 'A' initialized and test properties
    const tree = new TrieTree(['A']);
    expect(tree.root.isTerminal()).toBe(false);
    expect(tree.root.numChildren()).toBe(1);
    expect(tree.root.hasChild('A')).toBe(true);

    const node_A = tree.root.getChild('A');
    expect(node_A.character).toEqual('A');
    expect(node_A.isTerminal()).toBe(true);
    expect(node_A.numChildren()).toEqual(0);
});

test('Tree insertion', () => {
    // Create a new tree with no initialized value and insert 'AB'
    const tree = new TrieTree();
    tree.insert('AB');

    expect(tree.root.isTerminal()).toBe(false);
    expect(tree.root.numChildren()).toBe(1);
    expect(tree.root.hasChild('A')).toBe(true);

    const node_A = tree.root.getChild('A');
    expect(node_A.character).toEqual('A');
    expect(tree.root.numChildren()).toBe(1);
    expect(node_A.isTerminal()).toBe(false);
    expect(node_A.hasChild('B')).toBe(true);

    const node_B = node_A.getChild('B');
    expect(node_B.character).toEqual('B');
    expect(node_B.numChildren()).toBe(0);
    expect(node_B.isTerminal()).toBe(true);
});

test('Tree is empty and size', () => {
    // Create a tree with 'A' initialized and test size and isEmpty
    const tree = new TrieTree(['A']);

    expect(tree.size).toEqual(1);
    expect(tree.isEmpty()).toBe(false);
});

test('Inserting duplicate characters', () => {
    // Create a new tree with no initialized value
    const tree = new TrieTree();

    expect(tree.size).toEqual(0);
    expect(tree.isEmpty()).toBe(true);

    tree.insert('A');
    expect(tree.size).toEqual(1);
    expect(tree.isEmpty()).toBe(false);

    tree.insert('A');
    expect(tree.size).toEqual(1);

    tree.insert('AB');
    expect(tree.size).toEqual(2);
    expect(tree.isEmpty()).toBe(false);
});

test('Tree contains', () => {
    // Create a tree with T1 initialized and test contains
    const T1 = ['A', 'AB', 'ABC'];
    const tree = new TrieTree(T1);

    expect(tree.contains('A')).toBe(true);
    expect(tree.contains('Z')).toBe(false);
    expect(tree.contains('XA')).toBe(false);
    expect(tree.contains('AB')).toBe(true);
    expect(tree.contains('ABC')).toBe(true);
});

test('Tree complete', () => {
    // Create a tree with T1 initialized and test contains
    const T1 = ['A', 'AB', 'ABC'];
    const tree = new TrieTree(T1);

    expect(tree.complete('A')).toEqual(['A', 'AB', 'ABC']);
    expect(tree.complete('AB')).toEqual(['AB', 'ABC']);
    expect(tree.complete('ABC')).toEqual(['ABC']);
    expect(tree.complete('Z')).toEqual([]);
});
