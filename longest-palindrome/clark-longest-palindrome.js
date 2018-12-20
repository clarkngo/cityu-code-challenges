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

// best practice
longestPalindrome=function(s){
  var longest = 0;
  var length = s.length;

  for(var i=0; i < length; i++){
    for(var j = i+1; j <= length; j++) {
      var str = s.slice(i,j);
      var l = str.length
      if(isPalindrome(str) && longest < l) {
        longest = l;
      }
    }
  }
  return longest;
}

function isPalindrome(s) {
  var arr = s.split("");
  return s == arr.reverse().join("");
}

// other solution
var longestPalindrome=function(s){
  if (!s) return 0;
  for (let c = s.length; c > 0; c--) {
    for (let i = 0; i <= s.length - c; i++) {
      var check = s.substr(i, c);
      if (check === check.split("").reverse().join("")) return c;
    }
  }
}

// other solution
longestPalindrome=function(s){
  var l = 0;
  for (var i = 0; i<s.length; i++)
    for(var j = i; j<=s.length; j++)
      if(s.substring(i,j) === s.substring(i,j).split('').reverse().join('') && s.substring(i,j).length > l)
        l = s.substring(i,j).length;

  return l;
}

// other solution
longestPalindrome=function(s){
  var a = s.split('');
  var length = 0;
  a.forEach(function(c, i){
    length = Math.max(exploreArrayForImpairPalindrome(i, a), length);
    length = Math.max(exploreArrayForPairPalindrome(i, a), length);
  });
  return length;
}

exploreArrayForImpairPalindrome=function(i, a){
  var length = 1;
  var iter = 1;
  while(thoseValuesAreEquals(i,i,a,iter)){
    length+=2;
    iter++;
  }
  return length;
}

exploreArrayForPairPalindrome=function(i, a){
  var length = 0;
  var iter = 0;
  while(thoseValuesAreEquals(i,i+1,a,iter)){
    length+=2;
    iter++;
  }
  return length;
}

thoseValuesAreEquals=function(i1, i2, a, iter){
  return a[i1-iter] && a[i1-iter]===a[i2+iter];
}
