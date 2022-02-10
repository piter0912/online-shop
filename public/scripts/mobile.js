const mobileMenuButtonElement = document.getElementById("mobile-menu-btn");
const mobileMenuElement = document.getElementById("mobile-menu");

function toggleMenu() {
  mobileMenuElement.classList.toggle("open");
}

mobileMenuButtonElement.addEventListener("click", toggleMenu);
