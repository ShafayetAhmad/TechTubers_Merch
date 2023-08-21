let totalPrice = 0;
let discount = 0;
let totalPriceWithDiscount = 0;
let hasDiscount = false;
let count = 1;

document.getElementById("total-price").innerHTML = 0.0;
document.getElementById("discount").innerHTML = 0.0;
document.getElementById("total-after-discount").innerHTML = 0.0;
let coupon = "techtuber";
const inputField = document.getElementById("coupon-input");

// enable apply button based on coupon code is correct or not and total amount > 50
inputField.addEventListener("keyup", function (event) {
  if (event.target.value.toLowerCase() === coupon) {
    document.getElementById("coupon-btn").removeAttribute("disabled");
  } else {
    document.getElementById("coupon-btn").setAttribute("disabled", true);
  }
});

function couponConfirmed() {
  document.getElementById("coupon-status").innerHTML =
    "<b>TechTuber</b> coupon applied !!!";
  hasDiscount = true;
  if (hasDiscount && totalPrice >= 50) {
    discount = (totalPrice * 0.2).toFixed(2);
    document.getElementById("discount").innerHTML = discount;
  }
  totalPriceWithDiscount = (totalPrice - discount).toFixed(2);
  document.getElementById("total-after-discount").innerHTML =
    totalPriceWithDiscount;
}

function getPriceAfterCoupon() {
  totalPrice - totalPrice * 0.2;
}

function addItemToCart(itemID, itemPriceID) {
  const priceOfItem = parseFloat(
    document.getElementById(itemPriceID).innerHTML
  );
  totalPrice += priceOfItem;
  document.getElementById("total-price").innerHTML = totalPrice.toFixed(2);
  // enable purchase button based on amount is more than 0 dollar
  if (parseFloat(document.getElementById("total-price").innerHTML) > 0) {
    document.getElementById("purchase-btn").removeAttribute("disabled");
  } else {
    document.getElementById("purchase-btn").setAttribute("disabled", true);
  }
  if (hasDiscount && totalPrice >= 50) {
    discount = (totalPrice * 0.2).toFixed(2);
    document.getElementById("discount").innerHTML = discount;
  }
  totalPriceWithDiscount = (totalPrice - discount).toFixed(2);
  document.getElementById("total-after-discount").innerHTML =
    totalPriceWithDiscount;
  const newCartItem = document.getElementById(itemID).innerText;
  document
    .getElementById("cart-section-products-list")
    .appendChild(document.createElement("li")).innerText = `${
    count++ + ". " + newCartItem
  }`;
}

// copy coupon code on btn click
function copyToClipboard() {
  navigator.clipboard.writeText("TechTuber");
  document
    .getElementById("coupon-copy")
    .setAttribute("title", "Copied the Coupon: TechTuber");
}

function goHome() {
  window.location.href = "/";
}
