function absentVowel(x){
  let vowels = ["a", "b", "c", "d", "e"];
  let vowelCount = [0, 0, 0, 0, 0];
  for (let i = 0; i < x.length; i++) {
    if (x[i] == "a")
      vowelCount[0] = vowelCount[0] + 1;
    if (x[i] == "e")
      vowelCount[1] = vowelCount[1] + 1;  
    if (x[i] == "i")
      vowelCount[2] = vowelCount[2] + 1;
    if (x[i] == "o")
      vowelCount[3] = vowelCount[3] + 1;
    if (x[i] == "u")
      vowelCount[4] = vowelCount[4] + 1;                         
  }

  for (let j = 0; j < vowelCount.length; j++) {
    if (vowelCount[j] === 0) {
      return j;
    }
  }
}  


// best practice
function absentVowel(x) {
  var vowels = 'aeiou';
  for (var i in vowels) {
    if (x.toLowerCase().indexOf(vowels[i]) == -1) {
      return Number(i);
    }
  }
}

// regex
const absentVowel = x => {
  let vowels = [...'aeiou'],
      used   = [...x.replace(/[^aeiou]/g, '')],
      absent = vowels.filter(v => used.indexOf(v) == -1)[0];
  return vowels.indexOf(absent);
}

absentVowel("aeiu");
