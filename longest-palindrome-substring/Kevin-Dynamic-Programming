/** Dynamic Programming
 * The same test case just takes about 100ms when the brute force solution gives me a 10S.
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) return s;
    let palindromeIndexArrA = [];
    const strArr = s.split('');
    
    const strArrLength = strArr.length;
    // The first iteration looks for one and two palindromes
    strArr.forEach((char, index) => {
        // one char palindrome
        palindromeIndexArrA.push([index, index]);
        // two chars palindrome
        if ((index + 1) < strArrLength && checkPalindrome([char, strArr[index + 1]])) {
            palindromeIndexArrA.push([index, index + 1]);
        }
    });
    // console.log('palindromeIndexArrA', palindromeIndexArrA);
    if (palindromeIndexArrA.length === 0) return '';
    let hasIndexs = true;
    while(hasIndexs) {
        const palindromeIndexArrB = [];
        palindromeIndexArrA.forEach((e, index) => {
            const start = e[0] - 1;
            const end = e[1] + 1
            if (start >= 0 && end < strArrLength && strArr[start] === strArr[end]) {
                palindromeIndexArrB.push([start, end]);
            }
        });
        if (palindromeIndexArrB.length !== 0) palindromeIndexArrA = palindromeIndexArrB;
        else hasIndexs = false;
    }
    // console.log('last palindromeIndexArrA', palindromeIndexArrA);
    // The index array could have two different length array remaind.
    // Sort the array to let the first one has most indexs.
    palindromeIndexArrA.sort((pre, next) => (next[1] - next[0]) - (pre[1] - pre[0]));
    return s.slice(palindromeIndexArrA[0][0], palindromeIndexArrA[0][1] + 1);
};

/**
 * Check whether it is a palindrome.
 * @param {array} strArr is an array of string.
 * @return {boolean} Return a boolean to indicate whehter input is a palindrome.
 */
var checkPalindrome = function(strArr) {
    return strArr.join('') === [...strArr].reverse().join('');
}
