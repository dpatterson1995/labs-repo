let name1 = "Jimmy Carter";
let name2 = "George Washington";
let name3 = "Johnathan Smith";

if (name1.length === name2.length && name1.length === name3.length) {
  console.log(`${name1}, ${name2} and ${name3} Are the same length`);
} else if (name3.length > name1.length && name3.length > name2.length) {
  console.log(`${name3} Has the longest name!`);
} else if (name2.length > name1.length && name2.length > name3.length) {
  console.log(`${name2} Has the longest name!`);
} else if (name1.length > name2.length && name1.length > name3.length) {
  console.log(`${name1} Has the longest name!`);
} else if (name1.length === name2.length && name1.length !== name3.length) {
  console.log(`${name1} and ${name2} tie for the longest name!`);
} else if (name2.length === name3.length && name2.length !== name1.length) {
  console.log(`${name2} and ${name3} tie for the longest name!`);
} else if (name3.length === name1.length && name3.length !== name2.length) {
  console.log(`${name1} and ${name3} tie for the longest name!`);
}
