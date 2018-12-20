function longestPalindrome(str) {
  return checkPalindrome(str);
}

function checkPalindrome(str) {
  if (str.length === 0) {
    return 0;
  }   
  if (str.length === 2 && str[0] === str[1]) {
    console.log(2);
    return 2;
  }
  let longest = 1;    
  let addminus = 1;
  let temp = 0;

  //  1 3 5
  for (let i = 1; i < str.length - 1; i++) {
    let j = i;
    let k = i;

    j -= addminus;
    k += addminus;
    while (j >= 0 && k < str.length && str[j] === str[k]) {
     str.substring(j, k + 1);
     j -= addminus;
     k += addminus;
     temp = k - j - 1;
    }
    if (temp > longest) {
      longest = temp;
    }
  }
  // 2 4 6
  for (let i = 1; i < str.length - 1; i++) {
    let j = i;
    let k = i;

    j -= addminus;
    while (j >= 0 && k < str.length && str[j] === str[k]) {
     str.substring(j, k + 1);
     j -= addminus;
     k += addminus;
     temp = k - j - 1;
    }
    if (temp > longest) {
      longest = temp;
    }    
  }
  // 2 4 6
  for (let i = 1; i < str.length - 1; i++) {
    let j = i;
    let k = i;

    k += addminus;
    while (j >= 0 && k < str.length && str[j] === str[k]) {
     str.substring(j, k + 1);
     j -= addminus;
     k += addminus;
     temp = k - j - 1;
    }
    if (temp > longest) {
      longest = temp;
    }    
  }
  return longest;
}



longestPalindrome("I like racecars that go fast");
longestPalindrome("a");
longestPalindrome("aab");
longestPalindrome("abcde");
longestPalindrome("zzbaabcd");
longestPalindrome("");
