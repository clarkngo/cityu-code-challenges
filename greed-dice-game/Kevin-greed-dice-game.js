const checkPoint = diceArr => {
  const numMap = [];
  // Put all number in a map
  diceArr.forEach(num => {
    if (numMap[num]) numMap[num]++;
    else numMap[num] = 1;
  });
  let totalPoint = 0;
  numMap.forEach((num, index) => {
    if (index === 1) {
      if (numMap[index] >= 3) {
        totalPoint += 1000; // Calculate three one
        totalPoint += (numMap[index] - 3) * 100; // Add rest of one up
      } else totalPoint += numMap[index] * 100;
    } else if (index === 5) { // Add five
      if (numMap[index] >= 3) {
        totalPoint += 100 * index;
        totalPoint += (numMap[index] - 3) * 50; // Add up rest of five
      } else totalPoint += numMap[index] * 50;
    } else if (numMap[index] >= 3) totalPoint += 100 * index;
    
  });
  return totalPoint;
};
