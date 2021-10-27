/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let carry = container(height);
    let n = carry.length - 1;
    let sum = 0;
    let avarage = avg([carry[0], carry[n]]);
    for (let index = 0; index < n; index++) {
        sum += Math.floor(avarage);
    }
    return sum;
};
const container = (arr) => {
    let length = arr.length;
    if (arr[0] === 0)
        return container(arr.slice(1, length));
    if (arr[length - 1] === 0) {
        arr.pop();
        return container(arr)
    }
    if (length === 2 || arr[0] >= Math.floor(avg([arr[0], arr[length - 1]]))) {
        return arr;
    }
    return container(arr.slice(1, length));
}

let avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

let input = [1, 2];
input = [1, 2, 4, 3]
input = [2, 3, 4, 5, 18, 17, 6]
input = [2, 3]
console.log(container(input));
console.log(maxArea(input));