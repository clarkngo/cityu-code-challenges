const twoSum = (nums, target, returnArr) => {
  const numsMap = {};
  nums.forEach((num, index) => numsMap[num] = index);

  nums.forEach((num, index) => {
    if (numsMap[target - num] && numsMap[target - num] !== index) {
      returnArr.push([-target, num, target - num]);
    }
  });
};

const threeSum = nums => {
  const returnArr = [];
  
  nums.forEach((num, index) =>
    twoSum([...num.slice(index, index + 1), index + 1 < nums.length ? ...num.slice(index + 1) : ...[]], -num, returnArr));
};
