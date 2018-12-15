// This is messy. I will find a time revise it.
function toWeirdCase(string){
  let returnWord = '';
  const words = string.split(' ');
  words.map(word => returnWord += (word.split('').map((char, index) => index % 2 !== 0 ? char.toLowerCase() : char.toUpperCase()).join('')) + ' ');
  return returnWord.slice(0, -1);
}
