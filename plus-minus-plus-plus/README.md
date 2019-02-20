# Plus - minus - plus - plus - ... - Count
Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
```
const arr = [1, -3, -4, 0, 5]

| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |

return 2;
```
Sample Tests:
```
1 Test.assert_equals(catch_sign_change([1, 3, 4, 5]), 0)
2 Test.assert_equals(catch_sign_change([1, -3, -4, 0, 5]), 2)
3 Test.assert_equals(catch_sign_change([]), 0) 4
Test.assert_equals(catch_sign_change([-47,84,-30,-11,-5,74,77]), 3)
```

Source: https://www.codewars.com/kata/plus-minus-plus-plus-dot-dot-dot-count/train/ruby