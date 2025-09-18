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
 * @return {number[]}
 */
var preorderTraversal = function preOrder(root) {
   let arr=[]
   function Preorder(node){
    if(!node) return 
    arr.push(node.val)
    Preorder(node.left)
    Preorder(node.right)
   }
   Preorder(root)
   return arr
};