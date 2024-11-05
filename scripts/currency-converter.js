let basic = document.getElementById("price-basic");
let professional = document.getElementById("price-professional");
let premium = document.getElementById("price-premium");

const selectors = document.getElementById("units").children;

const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

const basicStart = 0;
const professionalStart = 25;
const premiumStart = 60;


async function changeCoin(money) {
  try {
    const response = await fetch(url);
    const coins = await response.json();
    let change;

    switch (money) {
      case "EUR":
        change = coins.usd.eur;
        basic.childNodes.item(0).data = `€${parseInt(basicStart * change)}`;
        professional.childNodes.item(0).data =
          `€${parseInt(professionalStart * change)}`;
        premium.childNodes.item(0).data =
          `€${parseInt(premiumStart * change)}`;
        break;

      case "USD":
        change = coins.usd.usd;
        basic.childNodes.item(0).data = `$${parseInt(basicStart * change)}`;
        professional.childNodes.item(0).data =
          `$${parseInt(professionalStart * change)}`;
        premium.childNodes.item(0).data =
          `$${parseInt(premiumStart * change)}`;
        break;

      case "GBP":
        change = coins.usd.gbp;
        basic.childNodes.item(0).data = `£${parseInt(basicStart * change)}`;
        professional.childNodes.item(0).data =
          `£${parseInt(professionalStart * change)}`;
        premium.childNodes.item(0).data =
          `£${parseInt(premiumStart * change)}`;
        break;
    }
  } catch (error) {
    console.log(error);
  }
}

for (let i = 0; i < selectors.length; i++) {
  selectors.item(i).addEventListener("click", () => {
    changeCoin(selectors.item(i).textContent);
  });
}