class InterconvertStrToInt {

  public static Integer toInt(String str) {
      int digit;
      int result = 0;
      boolean isNegative = false;
      // enhanced for loop
      for (char c: str.toCharArray()) {        
        digit = c - '0'; // this will convert to integer, only integers can deal with arithmetic operations
        if (digit < 0) 
        {
          isNegative = true;
          continue;
        }
        else 
        {
          result = result * 10 + digit;
        }
      }      
      if (isNegative) 
      {
        return result * -1;
      }
      else 
      {
        return result;
      }
    }

  public static String toString(Integer number) {

    int digit = 0;
    char a;
    String str= "";
    boolean isNegative = false;
    if (number < 0)
    {
      number *= -1;
      isNegative = true;
    }
    while (number != 0) {
      digit = (number % 10) + '0';
      number = number / 10;
      a = (char)digit;
      str = Character.toString(a) + str;
    }  
    if (isNegative)
    {
      return str = "-" + str;
    }
    else 
    {
      return str;
    }
  }

  public static void main(String[] args) {
    String myString = "185";
    int myInt = 185;
    System.out.println(toInt(myString));
    System.out.println(toString(myInt));
    String myNegativeString = "-185";
    int myNegativeInt = -185;
    System.out.println(toInt(myNegativeString));
    System.out.println(toString(myNegativeInt));
  }
}
