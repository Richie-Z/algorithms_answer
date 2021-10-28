const findMaxConsecutiveOnes = nums => {
    let count = 0,
        res = 0;
    for (let i of nums) {
        if (i === 0)
            count = 0;
        else {
            count++;
            res = res > count ? res : count;
        }
    }
    return res;
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));