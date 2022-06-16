/*
 * @LastEditTime: 2022-06-16 11:14:18
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 2) {
        return nums.length
    }
    let fast = 0,slow = 0
    while(fast < nums.length){
       if (nums[fast]===nums[slow]) {
        fast ++
       } else {
        ++slow
        nums[slow]=nums[fast]
       }
    }
    return slow+1
};
// @lc code=end

