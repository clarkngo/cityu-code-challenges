function spinWords(str) {

  let arr = [];
  arr = str.split(" ");

  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length >= 5) {
      var reverseArr = [];
      for (let i = arr[j].length - 1; i >= 0 ; i--) {
        reverseArr.push(arr[j][i]);
      }
      let stringify = "";
      stringify = reverseArr.join("");
      arr[j] = stringify;
    } 
  }
  return arr.join(" ");
}

spinWords("Hello and goodbye");
