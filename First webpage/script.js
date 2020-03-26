const name = "Charles Magbo";
console.log(`My names are: ${name}`);

const courses = ["HTML", "CSS", "Javascript"];
console.log(`My Courses are:  ${courses}`);

const isEven = courses.length%2 === 0 ? true : false;

for(let i = 1; i <= 200; i++) {
  if (isEven && i%2 === 0) {
      console.log(i)
  }

  if (!isEven && i%2 !==0)  {
      console.log(i)
  }
}