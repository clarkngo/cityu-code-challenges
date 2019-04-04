# The Hashtag Generator
Source: https://www.codewars.com/kata/52449b062fb80683ec000024/train/ruby

The marketing team is spending way too much time typing in hashtags.
Let's help them with out own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
```
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
```

Sample Tests:
```
Test.assert_equals(generateHashtag(""), false, "Expected an empty string to return false")
Test.assert_equals(generateHashtag(" " * 200), false, "Still an empty string")
Test.assert_equals(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
Test.assert_equals(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
Test.assert_equals(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
Test.assert_equals(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
Test.assert_equals(generateHashtag("code" + " " * 140 + "wars"), "#CodeWars")
Test.assert_equals(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
Test.assert_equals(generateHashtag("a" * 139), "#A" + "a" * 138, "Should work")
Test.assert_equals(generateHashtag("a" * 140), false, "Too long")
```
