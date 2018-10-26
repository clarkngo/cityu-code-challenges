/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const endWordIndex = wordList.indexOf(endWord);
    if (endWordIndex === -1) return 0; // The endWord is not in the wordList.
    if (beginWord.length === 1 || checkWords(beginWord, endWord)) return 2; // Consider case 'a' 'c' ['a', 'b', 'c']
    const beginWordIndex = wordList.indexOf(beginWord);
    if (beginWordIndex !== -1) wordList.splice(beginWordIndex, 1);
    
    let hitArr = [beginWord];
    let path = 1; // Start with 1 because we have the begin word in the list.
    while(wordList.length !== 0) {
        const nextArrObject = getNextWords(wordList, hitArr);
        // If the set size does not equal two arraies' length, they have common element.
        if (nextArrObject.returnArr.indexOf(endWord) !== -1) return ++path;
        else if (nextArrObject.returnArr.length === 0) return 0;
        else {
            path++;
            // Removing hit elements from the wordList
            const tempArr = [];
            wordList.forEach((e, index) => {
                if (nextArrObject.hitIndexs.indexOf(index) === -1) tempArr.push(e);
            });
            wordList = tempArr;
            hitArr = nextArrObject.returnArr;
            console.log('wordList', wordList);
        }
    }
    return 0;
};

var getNextWords = function (wordList, wordArr) {
    const hitIndexs = [];
    const returnArr = [];
    wordArr.forEach(word => {
        wordList.forEach((listWord, index) => {
            if (checkWords(word, listWord)) {
                hitIndexs.push(index);
                returnArr.push(listWord);
            }
        });
    });
    return { hitIndexs, returnArr };
};

var checkWords = function(word, listWord) {
    let isDifferent = false;
    for (let i = 0; i < listWord.length; i++) {
        if (listWord.charAt(i) !== word.charAt(i)) {
            if (isDifferent) {
                isDifferent = false;
                break;
            } else {
                isDifferent = true;
            }
        }
    }
    return isDifferent;
};
