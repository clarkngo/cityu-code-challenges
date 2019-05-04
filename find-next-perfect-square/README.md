# Find the next perfect square!
Source: https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/java

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

Examples:
```
findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect
```

Sample Tests
```
import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runners.JUnit4;


public class FindNextSquareTest {
    @Test
    public void test1() {
        assertEquals(144, NumberFun.findNextSquare(121));
    }
    
    @Test
    public void test2() {
        assertEquals(676, NumberFun.findNextSquare(625));
    }
    
    @Test
    public void test3() {
        assertEquals(-1, NumberFun.findNextSquare(114));
    }
    
    
}
```