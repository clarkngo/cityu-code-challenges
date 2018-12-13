function removeChar(str){
    var newStr = "";
    for (let i = 1; i < str.length - 1; i++) {
      newStr += str[i];
    }
    return newStr;
  };

// best practice
function removeChar(str) {
  return str.slice(1, -1);
}

console.log(removeChar("hello"));
