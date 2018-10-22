/** Brute force
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longestP = [];
    const strArr = s.split('');
    while(strArr.length > longestP.length) {
        const internalArr = [];
        for (let i = 0; i < strArr.length; i++) {
            internalArr.push(strArr[i]);
            if (checkPalindrome(internalArr) && internalArr.length > longestP.length) longestP = [...internalArr];
        }
        strArr.shift();
    }
    return longestP.join('');
};

/**
 * Check whether it is a palindrome.
 * @param {array} strArr is an array of string.
 * @return {boolean} Return a boolean to indicate whehter input is a palindrome.
 */
var checkPalindrome = function(strArr) {
    return strArr.join('') === [...strArr].reverse().join('');
}

// LeetCode gives me a Time Limit Exceeded with the test Case
/*
civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendur
eWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldas
afinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogeth
erfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecra
tewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrated
itfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwh
atwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicated
heretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisrather
forustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwet
akeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatwe
herehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallha
veanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotper
ishfromtheearth
*/
