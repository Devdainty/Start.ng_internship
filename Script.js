const data = [
 {
   principal: 2500,
   time: 1.8
 },
 {
   principal: 1000,
   time: 5
 },
 {
   principal: 3000,
   time: 1
 },
 {
   principal: 2000,
   time: 3
 }
]

const obj = (principal, time, rate, interest) => {
  return {
    principal, time, rate, interest
  }
}

const interestCalculator = (arr) => {
  const interestData = [];
  
  arr.map(ar => {
    const pr = ar.principal;
    const time = ar.time;
    if (pr >= 2500 && time > 1 && time < 3) {
      const interest = (pr * time * 3) / 100;
      interestData.push(obj(pr, time, 3, interest))
    } else if (pr >= 2500 && time >= 3) {
      const interest = (pr * time * 4) / 100;
      interestData.push(obj(pr, time, 4, interest))
    } else if (pr < 2500 || time <= 1) {
      const interest = (pr * time * 2) / 100;
      interestData.push(obj(pr, time, 2, interest))
    } else {
      const interest = (pr * time * 1) / 100;
      interestData.push(obj(pr, time, 1, interest))
    }
  })
  
  return interestData;
}

console.log(interestCalculator(data))