import java.math.BigInteger;

// Brute force
public class Fibonacci {
  private final static BigInteger zero = new BigInteger("0");
  private final static BigInteger one = new BigInteger("1");
  private final static BigInteger two = new BigInteger("2");

  public static BigInteger fib(BigInteger n) {
    //Base case
    if (n.compareTo(Fibonacci.zero) == 0) return Fibonacci.zero;
    if (n.compareTo(Fibonacci.one) == 0) return Fibonacci.one;
    
    if (n.compareTo(Fibonacci.zero) == -1) return Fibonacci.fib(n.add(Fibonacci.two)).subtract(Fibonacci.fib(n.add(Fibonacci.one)));
    return Fibonacci.fib(n.subtract(Fibonacci.one)).add(Fibonacci.fib(n.subtract(Fibonacci.two)));
  }
}
