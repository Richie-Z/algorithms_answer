/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let objString = [];
    let ans = 0;
    let i = 0;
    for (let j = 0; j < s.length; j++) {
        if (objString[s[j]] != undefined)
            i = Math.max(objString[s[j]], i)
        ans = Math.max(ans, j - i + 1)
        objString[s[j]] = j + 1;
    }
    return ans;
};

let input = "abcabcbb";
console.log(lengthOfLongestSubstring(input));