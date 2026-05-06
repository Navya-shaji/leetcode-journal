/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
    let curr = head.next
    let newList = new ListNode(0)
    let temp = newList
    let total = 0
    while (curr) {
        if (curr.val == 0) {
            temp.next = new ListNode(total)
            temp = temp.next
            total = 0
        } else {
            total += curr.val
        }
        curr = curr.next
    }
    return newList.next
};