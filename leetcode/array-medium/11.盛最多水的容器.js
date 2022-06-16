/*
 * @LastEditTime: 2022-06-15 16:38:10
 * @Description: 双指针
 */
/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let a = 0 , b = height.length-1 , num = 0
    while (a !== b ){
        const s = (b - a) * Math.min(height[a],height[b])
        if (s > num) num = s
        if (height[a]<height[b]) {
            a++
        } else {
            b--
        }
    }
    return num
};
// @lc code=end

