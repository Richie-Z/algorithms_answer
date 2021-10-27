function isValidSubsequence(array, sequence) {
    if (sequence.length > array.length) return false
    if (sequence.length == array.length) {
        let isSame = true;
        for (let index = 0; index < array.length; index++) {
            isSame = isSame && array[index] == sequence[index];
        }
        return isSame;
    }
    let isSame = true;
    for (let i = 0; i < sequence.length; i++) {
        let childSame = false;
        for (let j = 0; j < array.length; j++) {
            if (sequence[i] == array[j]) {
                array.splice(j, 1)
                childSame = true
                break;
            }
        }
        isSame = isSame && childSame;
    }
    return isSame;
}

function solution2(array, sequence) {
    let seqId = 0
    for (const val in array) {
        if (seqId === sequence.length) break;
        if (sequence[seqId] === val) seqId++;
    }
    return seqId === sequence.length;
}
const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, -1];


console.log(solution2(array, sequence));
// Do not edit the line below.
// exports.isValidSubsequence = isValidSubsequence;