import java.math.BigInteger;
import java.util.*;
  
// Dynamic Programming
public class Fibonacci {
  private final static BigInteger zero = new BigInteger("0");
  private final static BigInteger one = new BigInteger("1");
  private final static BigInteger two = new BigInteger("2");
  private final static Map<BigInteger, BigInteger> resultMap = new HashMap<>();

  public static BigInteger fib(BigInteger n) {
    if (resultMap.containsKey(n)) return resultMap.get(n);
    //Base case
    if (n.compareTo(Fibonacci.zero) == 0) return Fibonacci.zero;
    if (n.compareTo(Fibonacci.one) == 0) return Fibonacci.one;
    
    BigInteger result;
    if (n.compareTo(Fibonacci.zero) == -1) result = Fibonacci.fib(n.add(Fibonacci.two)).subtract(Fibonacci.fib(n.add(Fibonacci.one)));
    else result = Fibonacci.fib(n.subtract(Fibonacci.one)).add(Fibonacci.fib(n.subtract(Fibonacci.two)));
    resultMap.put(n, result);
    return result;
  }
  
}
