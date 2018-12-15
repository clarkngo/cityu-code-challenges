function absentVowel(x){
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) if (x.search(vowels[i]) === -1) return i;
}
