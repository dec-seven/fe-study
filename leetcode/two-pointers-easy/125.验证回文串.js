/*
 * @LastEditTime: 2022-06-17 17:35:45
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;right = s.length-1
    let flag = true
    const reg = /^[0-9]|[a-z]|[A-Z]$/
    while(left < right){
       if (!reg.test(s[left])) {
            left++
            continue
       }
       if(!reg.test(s[right])){
            right--
            continue
       }
        if(s[left].toLowerCase() === s[right].toLowerCase()){
            left++
            right--
            flag = true
        } else {
            flag = false
            console.log(11111);
            break
        }
    }
    return flag
};
// @lc code=end

