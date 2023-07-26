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
        
          <h1 class="heading m-b"></h1>
          <div class="">
            <div class="canopy">
              <span></span>
              <ul class="canopy-list">
                <li class="backend"></li>
                <li class="year"></li>
              </ul>
            </div>

           <div class="img">
              <img src= alt="" />
            </div>
          <div class="text-container">

              <div class="parag"><p class="p1"></p></div>
             <div class="buttons">
              <ul class="list-B">
                <li class="">HTML</li>
                <li class="">Css</li>
                <li class="">JavaScript</li>
                <li class="ruby">Ruby</li>
                <li class="bootstrap">Boostrap</li>
              </ul>
            
              <button>See Live</button>
              <button>See source</button></div>
            </div>

          </div>
            
        </div>
      </div>`;

div.className = "popupcontainer";

popupwindow.append(div);

const popclose = document.querySelector(".icon-close");
popclose.addEventListener("click", function () {
  popupwindow.classList.remove("visible");
});

const projectbtn = document.querySelectorAll(".btn");
for (let btn of projectbtn) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    popupwindow.classList.add("visible");

    const array = [];

    const card = e.target.parentNode.parentNode.parentNode;

    const h1 = card.querySelector(".h-1").innerHTML;
    const span = card.querySelector(".project span").innerHTML;
    const backend = card.querySelectorAll(".listA-items");
    const img = card.querySelector(".cards img").src;
    const paragraph = card.querySelector(".p-1");
    console.log(paragraph);

    const portfolio = card.querySelectorAll(".listB-items");

    array[0] = h1;
    array[1] = span;
    array[2] = { list1: backend[0].innerHTML, list2: backend[1].innerHTML };
    array[3] = img;
    array[4] = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`;
    array[5] = {
      portfolio1: portfolio[0].innerHTML,
      portfolio2: portfolio[1].innerHTML,
      portfolio3: portfolio[2].innerHTML,
    };

    const heading = document.querySelector(".heading");
    const canopy = document.querySelector(".canopy span");
    const backn = document.querySelector(".backend");
    const year = document.querySelector(".year");
    let image = document.querySelector(".img img");
    const p1 = document.querySelector(".p1");
    image.src = array[3];
    year.innerHTML = array[2].list2;
    backn.innerHTML = array[2].list1;
    canopy.innerHTML = array[1];
    heading.innerHTML = array[0];
    p1.innerHTML = array[4];

    console.log(array);
  });
}
