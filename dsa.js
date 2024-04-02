const findEquilibrium = (arr) => {
  if (arr.length === 1) {
    return 0;
  }
  if (arr.length === 2) {
    return -1;
  }

  let leftSum = 0;
  let rightSum = 0;
  for (let j = 1; j < arr.length; j++) {
    rightSum += arr[j];
  }
  for (let i = 1; i < arr.length - 1; i++) {
    leftSum += arr[i - 1];
    rightSum -= arr[i];

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
};

let arr2 = [];
arr2.length = 3;
console.log(arr2[0] == 0);
console.log(findEquilibrium([1, 3, 5, 4, 5, 2, 2]) + 1);
