## Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0


Hint: First, build a method to checkPalindrome.
Hint: Second, loop through each permutation of possible starting and ending positions for a string.
Hint: Third, use the substring method to convert the starting and ending positions into a substring.
Hint: Fourth, keep track of the length of the largest palindromes length. If the substring you currently have is longer than the length, update it.

Sample Tests:
Test.assertEquals(longestPalindrome("a"), 1)
Test.assertEquals(longestPalindrome("aa"), 2)
Test.assertEquals(longestPalindrome("baa"), 2)
Test.assertEquals(longestPalindrome("aab"), 2)
Test.assertNotEquals(longestPalindrome("zyabyz"), 6, "Are you sure that is a palindrome?")
Test.assertEquals(longestPalindrome("baabcd"), 4)
Test.assertEquals(longestPalindrome("baablkj12345432133d"), 9)
