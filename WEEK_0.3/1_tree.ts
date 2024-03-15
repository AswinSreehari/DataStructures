class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function countLeaves(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    if (root.left === null && root.right === null) {
        return 1;
    }
    return countLeaves(root.left) + countLeaves(root.right);
}

const root: TreeNode = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(countLeaves(root)); // 3
