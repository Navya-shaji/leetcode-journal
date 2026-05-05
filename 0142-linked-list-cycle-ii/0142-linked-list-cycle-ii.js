/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            let ptr = head;

            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }

            return ptr;
        }
    }

    return null;
}
function formatOutput(head, pos) {
    const input = `Input: head = [${head.join(",")}], pos = ${pos}`;

    let output;

    if (pos === -1) {
        output = "Output: no cycle";
    } else {
        output = `Output: tail connects to node index ${pos}`;
    }

    return input + "\n" + output;
}