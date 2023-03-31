const menuBody = document.querySelector(".mobile-menu");
const qqq = document.querySelector(".body");

document.addEventListener("click", menu);

function menu(event) {
  if (event.target.closest(".menu-btn")) {
    menuBody.classList.toggle("is-open");
    qqq.classList.toggle("lock");
  }
  if (event.target.closest(".mobile-menu")) {
    menuBody.classList.remove("is-open");
    qqq.classList.remove("lock");
  }
}
