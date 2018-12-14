function isPrime(num) {
    if (num < 1)
      return false;
    if (num === 1)
      return false;
      
    if (num === 2 || num === 3)
      return true;
  
    if (num % 2 === 0)
      return false;
    else
      if (num % 3 === 0)
        return false;
      else
        return true;
  }
  
// best practice
function isPrime(num) {
    for (var i = 2; i < num; i++) if (num % i == 0) return false;
    return num >= 2; 
  }
