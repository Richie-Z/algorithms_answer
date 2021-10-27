/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea1 = function (height) {
    let l = 0,
        r = height.length - 1,
        maxArea = 0;
    while (l < r) {
        const leftItem = height[l],
            rightItem = height[r];
        if (height[l] < height[r]) {
            maxArea = Math.max(maxArea, (leftItem * (r - l)))
            l++;
        } else {
            maxArea = Math.max(maxArea, (rightItem * (r - l)))
            r--;
        }
    }
    return maxArea;
};

var maxArea = height => {
    let n = height.length;
    if (n < 2) return 0;
    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            maxArea = Math.max(maxArea, (Math.min(height[i], height[j]) * (j - i)))
        }
    }
    return maxArea;
}
let input = [1, 2, 1];
console.log(maxArea1(input));