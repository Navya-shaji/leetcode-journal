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
var insertGreatestCommonDivisors = function (head) {
    function Gcd(a, b) {
        while (b !== 0) {
            let temp = b
            b = a % b
            a = temp
        }
        return a
    }

    let current = head
    while (current && current.next) {
        let g = Gcd(current.val, current.next.val)
        let newNode = new ListNode(g)

        newNode.next = current.next
        current.next = newNode
        current = newNode.next
    }
    return head
};