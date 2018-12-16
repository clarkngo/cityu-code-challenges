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

// best practice
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

// regex
function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}

spinWords("Hello and goodbye");
