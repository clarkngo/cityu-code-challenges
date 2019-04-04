public class Kata {
  public static String HighAndLow(String numbers) {
    String strArray[] = numbers.split(" ");
    int intArray_size = strArray.length;
    int intArray[] = new int[intArray_size];
    
    for (int i = 0; i < strArray.length; i++) {
      intArray[i] = Integer.valueOf(strArray[i]);
    }
    
    int highest = intArray[0];
    int lowest = intArray[0];
    
    for (int j = 1; j < intArray.length; j++) {
      if (intArray[j] > highest) {
        highest = intArray[j];
      }
      if (intArray[j] < lowest) {
        lowest = intArray[j];
      }
    }
    
    return String.valueOf(highest) + " " + String.valueOf(lowest);
  }
}

# other solutions
import java.util.Arrays;

public class Kata {
    public static String HighAndLow(String numbers) {

        int min = Arrays.stream(numbers.split(" "))
                        .mapToInt(i -> Integer.parseInt(i))
                        .min()
                        .getAsInt();

        int max = Arrays.stream(numbers.split(" "))
                        .mapToInt(i -> Integer.parseInt(i))
                        .max()
                        .getAsInt();

        return String.format("%d %d", max, min);
    }
}

# other solutions
import java.util.*;
import java.util.stream.*;

public class Kata {
  public static String HighAndLow(String numbers) {
    IntSummaryStatistics summary = Arrays
      .stream(numbers.split(" "))
      .collect(Collectors.summarizingInt(n -> Integer.parseInt(n)));
    return String.format("%d %d", summary.getMax(), summary.getMin());
  }
}

# other solutions
import java.util.Arrays;
import java.util.IntSummaryStatistics;

public class Kata {
  public static String HighAndLow(String numbers) {
    IntSummaryStatistics stats = Arrays.stream(numbers.split("\\s")).
      mapToInt(Integer::parseInt).summaryStatistics();
        
    return String.format("%d %d", stats.getMax(), stats.getMin());
  }
}
