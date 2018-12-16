function toWeirdCase(string){
  string = string.split(" ");
  for (let i = 0; i < string.length; i++) {
      let substr = "";
    for (let j = 0; j < string[i].length; j++) {
      if (j % 2 === 0) {
        substr += string[i][j].toUpperCase();
      } 
      else
      {
        substr += string[i][j].toLowerCase();
      } 
    }
    string[i] = substr;
  }
  return string.join(" ");
}

// best practice
function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}

// functional
function toWeirdCaseCharacter(chr, index)
{
  return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
}

function toWeirdCaseWord(word){
  return word.split("").map(toWeirdCaseCharacter).join("");
}

function toWeirdCase(string){
  return string.split(" ").map(toWeirdCaseWord).join(" ");
}
