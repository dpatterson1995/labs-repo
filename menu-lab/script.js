let letters = document.querySelector("#letters");
let numbers = document.querySelector("#numbers");

letters.addEventListener("click", showLetters);
numbers.addEventListener("click", showNumbers);

function showLetters(e) {
  e.preventDefault();
  let actualLetters = document.querySelector("#actualLetters");
  let actualNumbers = document.querySelector("#actualNumbers");
  actualLetters.style.display = "block";
  actualNumbers.style.display = "none";
}
function showNumbers(e) {
  e.preventDefault();
  let actualLetters = document.querySelector("#actualLetters");
  let actualNumbers = document.querySelector("#actualNumbers");
  actualNumbers.style.display = "block";
  actualLetters.style.display = "none";
}
