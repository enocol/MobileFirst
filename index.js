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

const popupwindow = document.querySelector(".popupwindow");

const div = document.createElement("div");
div.innerHTML = `<div class="window">
                 <div><i class="fa-regular fa-x icon-close"></i></div>
        
          <h1 class="">Tonic</h1>
          <div class="">
            <div class="">
              <span>Canopy</span>
              <ul class="">
                <li class="">Back End Dev</li>
                <li class="">2015</li>
              </ul>
            </div>

            <div class="">
          <img src="./Images/Snapshoot-Portfolio (2).png" alt="" />
              </div>

            <p class="">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required.
            </p>
            <ul class="">
              <li class="">HTML</li>
              <li class="">Css</li>
              <li class="">JavaScript</li>
            </ul>
            <button>See Project</button>
          </div>
        </div>
      </div>`;

div.className = "popupcontainer";

popupwindow.append(div);

const popclose = document.querySelector(".icon-close");
popclose.addEventListener("click", function () {
  popupwindow.classList.remove("visible");
  console.log("closed");
});

const projectbtn = document.querySelectorAll(".btn");
for (let btn of projectbtn) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    popupwindow.classList.add("visible");
  });
}
