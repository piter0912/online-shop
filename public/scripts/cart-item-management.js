const cartItemUpdateFormElement = document.querySelectorAll(
  ".cart-item-management"
);

const cartBadge = document.querySelector(".nav-items .badge");
const cartTotalPriceElement = document.getElementById("cart-total-price");

async function updateCartItem(event) {
  event.preventDefault();

  const form = event.target;

  const productId = form.dataset.productid;
  const csrfToken = form.dataset.csrf;
  const newQuantity = form.firstElementChild.value;
  let response;
  try {
    response = await fetch("/cart/items", {
      method: "PATCH",
      body: JSON.stringify({
        productId: productId,
        quantity: newQuantity,
        _csrf: csrfToken,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    alert("Something went wrong 1");
    return;
  }

  if (!response.ok) {
    alert("Something went wrong 2");
    return;
  }

  const responseData = await response.json();

  if (responseData.updatedCartData.updatedItemPrice === 0) {
    form.parentElement.parentElement.remove();
  } else {
    const cartItemTotalPriceElement =
      form.parentElement.querySelector(".cart-item-price");
    cartItemTotalPriceElement.textContent =
      responseData.updatedCartData.updatedItemPrice.toFixed(2);
  }

  cartTotalPriceElement.textContent =
    responseData.updatedCartData.newTotalPrice.toFixed(2);

  cartBadge.textContent = responseData.updatedCartData.newTotalWuantity;
}

for (const formElement of cartItemUpdateFormElement) {
  formElement.addEventListener("submit", updateCartItem);
}
