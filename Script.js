const myFunc = num => {
  let resultArr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      resultArr.push('yu-gi-oh');
    } else if (i % 2 === 0 && i % 3 === 0 && i % 5 !== 0) {
      resultArr.push('yi-gi');
    } else if (i % 2 === 0 && i % 3 !== 0 && i % 5 === 0) {
      resultArr.push('yu-oh');
    } else if (i % 2 !== 0 && i % 3 === 0 && i % 5 === 0) {
      resultArr.push('gi-oh');
    } else if(i % 2 === 0 && i % 3 !== 0 && i % 5 !== 0) {
      resultArr.push('yu');
    } else if (i % 2 !== 0 && i % 3 === 0 && i % 5 !== 0) {
      resultArr.push('gi');
    } else if (i % 2 !== 0 && i % 3 !== 0 && i % 5 === 0) {
      resultArr.push('oh');
    } else {
      resultArr.push(i);
    }
  }
  return resultArr;
}

console.log(myFunc(10));
