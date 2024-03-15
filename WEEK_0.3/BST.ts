class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(val: number): TreeNode | null {
        const newNode = new TreeNode(val);
        if (!this.root) {
            this.root = newNode;
            return this.root;
        }
        let current = this.root;
        while (true) {
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this.root;
                }
                current = current.left;
            } else if (val > current.val) {
                if (!current.right) {
                    current.right = newNode;
                    return this.root;
                }
                current = current.right;
            } else {
                return this.root;  
            }
        }
    }

    contains(val: number): boolean {
        let current = this.root;
        while (current) {
            if (val === current.val) {
                return true;
            }
            if (val < current.val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    delete(val: number): void {
        this.root = this._deleteNode(this.root, val);
    }

    _deleteNode(node: TreeNode | null, val: number): TreeNode | null {
        if (!node) {
            return null;
        }
        if (val < node.val) {
            node.left = this._deleteNode(node.left, val);
        } else if (val > node.val) {
            node.right = this._deleteNode(node.right, val);
        } else {
            if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left;
            }
            let minRight = node.right;
            while (minRight.left) {
                minRight = minRight.left;
            }
            node.val = minRight.val;
            node.right = this._deleteNode(node.right, minRight.val);
        }
        return node;
    }

    inOrderTraversal(callback: (val: number) => void): void {
        this._inOrderTraversal(this.root, callback);
    }

    _inOrderTraversal(node: TreeNode | null, callback: (val: number) => void): void {
        if (node) {
            this._inOrderTraversal(node.left, callback);
            callback(node.val);
            this._inOrderTraversal(node.right, callback);
        }
    }

    preOrderTraversal(callback: (val: number) => void): void {
        this._preOrderTraversal(this.root, callback);
    }

    _preOrderTraversal(node: TreeNode | null, callback: (val: number) => void): void {
        if (node) {
            callback(node.val);
            this._preOrderTraversal(node.left, callback);
            this._preOrderTraversal(node.right, callback);
        }
    }

    postOrderTraversal(callback: (val: number) => void): void {
        this._postOrderTraversal(this.root, callback);
    }

    _postOrderTraversal(node: TreeNode | null, callback: (val: number) => void): void {
        if (node) {
            this._postOrderTraversal(node.left, callback);
            this._postOrderTraversal(node.right, callback);
            callback(node.val);
        }
    }
}

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(17);

// In-order traversal
console.log("In-order traversal:");
bst.inOrderTraversal(val => console.log(val)); //  3, 5, 7, 10, 12, 15, 17

// Pre-order traversal
console.log("Pre-order traversal:");
bst.preOrderTraversal(val => console.log(val)); //  10, 5, 3, 7, 15, 12, 17

// Post-order traversal
console.log("Post-order traversal:");
bst.postOrderTraversal(val => console.log(val)); //  3, 7, 5, 12, 17, 15, 10
