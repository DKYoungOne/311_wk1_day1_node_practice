const split = (str, delim) => str.split(delim);
  // write code for strings.split

const pairs = (str) => {
  // write code for strings.pairs
  const strArr = str.split('');
  let pairArr = [];
  for (let i = 0; i < str.length; i++) {
    if (strArr.length == 0) {
      break;
    } 
    else {
      const first = strArr.shift();
      const second = strArr.shift();
      const pair = first + second;
      pairArr.push(pair);

    }
    
    
  }
  return pairArr;
}

const reverse = (str) => {
  // write code for strings.reverse
  let toBeReversed = str.split('');
  console.log(toBeReversed)
  let toBeJoined = toBeReversed.reverse();
  console.log(toBeJoined.join(''));
  return toBeJoined.join('');


}

module.exports = {
  split,
  pairs,
  reverse
}