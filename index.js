const hamburger = document.querySelector(".fa");
const menulist = document.querySelector(".menu-list");
const menuitems = document.querySelectorAll(".menu-item");
const closebutton = document.querySelector(".fa-x");

hamburger.addEventListener("click", function () {
  menulist.classList.add("menu-visible");
  for (let element of menuitems) element.classList.add("menucolor");
});

closebutton.addEventListener("click", function () {
  menulist.classList.remove("menu-visible");
});

for (let menu of menuitems) {
  menu.addEventListener("click", function () {
    menulist.classList.remove("menu-visible");
  });
}
