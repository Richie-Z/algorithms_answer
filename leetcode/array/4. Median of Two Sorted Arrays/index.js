/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let newNums = [...nums1, ...nums2].sort((a, b) => a - b);
    let n = newNums.length,
        answer;
    if (n % 2 === 0) {
        n /= 2;
        answer = (newNums[n - 1] + newNums[n]) / 2;
    } else {
        answer = newNums[Math.floor(n / 2)];
    }
    return answer;
};
const nums1 = [3, 4],
    nums2 = [];
console.log(findMedianSortedArrays(nums1, nums2));