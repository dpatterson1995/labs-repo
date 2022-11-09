function main() {
  const bigger = document.querySelector("#grow-me");
  const smaller = document.querySelector(".big");
  const newLink = document.querySelector(".link");
  const hide = document.querySelector("#hide-me");
  const show = document.querySelector("#show-me");
  const newName = document.querySelector("#name");
  const head = document.querySelector("h1");

  bigger.classList.add("big");
  smaller.classList.remove("big");
  let liTag = document.querySelectorAll("li");
  for (i of liTag) {
    console.log(i.innerText);
  }
  newLink.setAttribute("href", "https://www.example.com");
  newLink.innerText = "somewhere";
  hide.style.display = "none";
  show.style.display = "block";
  head.innerText = `Welcome ${newName.value}!`;
}
