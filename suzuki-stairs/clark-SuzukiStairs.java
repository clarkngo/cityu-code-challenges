public class SuzukiStairs
{
    public static long stairsIn20(int[][] stairs)
    {
       int totalInOneYear = 0;
       for (int i = 0; i < stairs.length; i++) {
         for (int j = 0; j < stairs[i].length; j++) {
           totalInOneYear += stairs[i][j];
         }
       }
       return totalInOneYear * 20;
    }
}

// other solution
import java.util.Arrays;

public class Kata
{
    public static long stairsIn20(int[][] stairs)
    {
        return 20 * Arrays.stream(stairs).flatMapToInt(arr -> Arrays.stream(arr)).sum();
    }
}
