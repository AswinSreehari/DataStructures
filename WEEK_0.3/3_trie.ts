class TrieNode {
    children: { [key: string]: TrieNode };
    isEndOfWord: boolean;

    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    startsWith(prefix: string): string[] {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }
        return this.collect(node, prefix);
    }

    collect(node: TrieNode, prefix: string): string[] {
        let results: string[] = [];
        if (node.isEndOfWord) {
            results.push(prefix);
        }
        for (let char in node.children) {
            results = results.concat(this.collect(node.children[char], prefix + char));
        }
        return results;
    }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("banana");

console.log(trie.startsWith("app")); // ["app", "apple"]
console.log(trie.startsWith("ban")); // ["banana"]
console.log(trie.startsWith("bana")); // ["banana"]
