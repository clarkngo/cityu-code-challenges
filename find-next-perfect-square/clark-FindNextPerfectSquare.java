// my solutions
public class NumberFun {
  public static long findNextSquare(long sq) {
      double double_sq = (double) sq;
      double base_num = Math.sqrt(double_sq);
      long long_base_num = (long) base_num;
      long nextSquare = 0;
      if (base_num % 1 == 0.0)
      {
        nextSquare = (long_base_num + 1) * (long_base_num + 1);
        return nextSquare;
      } 
      else 
      {
        return -1;
      } 
  }
}

// other solution
public class NumberFun {
  public static long findNextSquare(long sq) {
      long root = (long) Math.sqrt(sq);
      return root * root == sq ? (root + 1) * (root + 1) : -1;
  }
}

// other solution
public class NumberFun {
  public static long findNextSquare(long sq) {
      return Math.sqrt(sq) % 1 != 0 ? -1 : (long)Math.pow(Math.sqrt(sq)+1,2);
  }
}
