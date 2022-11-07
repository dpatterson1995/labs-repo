const form = document.querySelector("#mainForm");

form.addEventListener("submit", addCoins);
result.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
  e.target.remove();
});

function addCoins(event) {
  event.preventDefault();

  const data = new FormData(form);

  let money = data.get("amount");

  let coins = data.get("moneyType");

  for (let i = 0; i < money; i++) {
    document.querySelector(
      "section"
    ).innerHTML += `<div class = "coinmaker ${coins}"></div>`;
  }
}
