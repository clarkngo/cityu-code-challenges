# Highest and Lowest
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Source: https://www.codewars.com/kata/554b4ac871d6813a03000035/train/java

Example:
```
HighAndLow("1 2 3 4 5")  // return "5 1"
HighAndLow("1 2 -3 4 5") // return "5 -3"
HighAndLow("1 9 3 4 -5") // return "9 -5"
```
Notes:

- All numbers are valid Int32, no need to validate them.
- There will always be at least one number in the input string.
- Output string must be two numbers separated by a single space, and highest number is first.

Sample Tests:
```
import org.junit.Test;

import static junit.framework.TestCase.fail;
import static org.junit.Assert.*;

public class Tests {
  @Test
  public void Test1() {
    assertEquals("42 -9", Kata.HighAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
  }
}
```
