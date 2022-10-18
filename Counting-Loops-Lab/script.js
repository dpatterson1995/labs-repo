for (let i = 1; i <= 10; i++) {
  console.log(`The value of i is: ${i}`);
}
for (let i = 10; i > 0; i--) {
  console.log(`The value of i is: ${i}`);
}

let a = 1;
while (a <= 10) {
  console.log(a);
  a++;
}
let b = 10;
while (b > 0) {
  console.log(b);
  b--;
}
let c = 1;
do {
  console.log(c);
  c++;
} while (c <= 10);

let d = 10;
do {
  console.log(d);
  d--;
} while (d > 0);

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
for (let number of numbers) {
  console.log(number);
}
