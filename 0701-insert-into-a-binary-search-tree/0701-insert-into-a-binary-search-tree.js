/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let newNode=new TreeNode(val)
    if(!root){
       return newNode  
    }
    let current=root
    while(true){
        if(val<current.val){
            if(!current.left){
                current.left=newNode
                break;
            }
            current=current.left
        }else if(val>current.val){
            if(!current.right){
                current.right=newNode
                break;
            }
            current=current.right
        }
    }
    return root
};