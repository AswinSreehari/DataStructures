class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function isValidBST(root: TreeNode | null, lower: TreeNode | null = null, upper: TreeNode | null = null): boolean {
    if (root === null) {
        return true;
    }
    if (lower !== null && root.val <= lower.val) {
        return false;
    }
    if (upper !== null && root.val >= upper.val) {
        return false;
    }
    return isValidBST(root.left, lower, root) && isValidBST(root.right, root, upper);
}

const root: TreeNode = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

console.log(isValidBST(root)); // true
