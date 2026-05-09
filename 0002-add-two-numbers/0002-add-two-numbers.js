/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    function ReverseSum(node) {
        if (!node) return ""
        return ReverseSum(node.next) + node.val
    }
    let num1 = ReverseSum(l1)
    let num2 = ReverseSum(l2)
    let sum = (BigInt(num1) + BigInt(num2)).toString()
    let head = null
    for (let item of sum) {
        head = new ListNode(Number(item), head)
    }
    return head
};