/*
 * @LastEditTime: 2022-06-20 16:09:30
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head;
    while (fast && fast.next){
        head = head.next
        fast = fast.next.next
        if (head === fast) return true
    }
    return false
};
// @lc code=end

