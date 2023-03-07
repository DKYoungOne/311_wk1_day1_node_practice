const isEven = (num) => {
  // write code for numbers.isEven
  if (num%2==0) {
    return true;
  }
  else {
    return false;
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  let addSum = 0;
  for (let i=0; i < arr.length; i++) {
    addSum += arr[i];
  } return addSum;
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (let i=0; i<arr.length;i++) {
    for(let j=0;j<arr.length;j++) {
      if (arr[i] == arr[j]) {
        continue;
      }
      else if (arr[i]+arr[j] == sum) {
        return true;
      }
    }
  } return false;
  
  
}
console.log(comboSum([1, 3, 6, 2, 9], 15))

module.exports = {
  isEven,
  sum,
  comboSum
}