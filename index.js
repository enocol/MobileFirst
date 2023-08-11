const hamburger = document.querySelector(".fa");
const menulist = document.querySelector(".menu-list");
const menuitems = document.querySelectorAll(".menu-item");
const closebutton = document.querySelector(".fa-x");

hamburger.addEventListener("click", () => {
  menulist.classList.add("menu-visible");

  for (let i = 0; i < menuitems.length; i += 1) {
    menuitems[i].classList.add("menucolor");
  }
});

closebutton.addEventListener("click", () => {
  menulist.classList.remove("menu-visible");
});

for (let i = 0; i < menuitems.length; i += 1) {
  menuitems[i].addEventListener("click", () => {
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
                <li class="">Ruby</li>
                <li class="ruby">JavaScript</li>
                <li class="bootstrap">Boostrap</li>
              </ul>
            
              <button  class="btn1 btn-1">See Live<img src="./images/icon.png" alt="" class="icon-img"></button>
              <button class="btn2 btn-1">See source<i class="fa-brands fa-github"></i></button>
              
              </div>
            </div>

          </div>
            
        </div>
      </div>`;

div.className = "popupcontainer";

popupwindow.append(div);

const popclose = document.querySelector(".icon-close");
popclose.addEventListener("click", () => {
  popupwindow.classList.remove("visible");
});

const projectbtn = document.querySelectorAll(".btn");
for (let i = 0; i < projectbtn.length; i += 1) {
  projectbtn[i].addEventListener("click", (e) => {
    e.stopPropagation();
    popupwindow.classList.add("visible");

    const array = [];

    const card = e.target.parentNode.parentNode.parentNode;
    const name = card.querySelector(".h-1").innerHTML;
    const span = card.querySelector(".project span").innerHTML;
    const technologies = card.querySelectorAll(".listA-items");
    const featureimage = card.querySelector(".cards img").src;
    const portfolio = card.querySelectorAll(".listB-items");

    array[0] = name;
    array[1] = span;
    array[2] = {
      list1: technologies[0].innerHTML,
      list2: technologies[1].innerHTML,
    };
    array[3] = featureimage;
    array[4] = `<p class="paragraphA">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it 1960s. 
     Lorem Ipsum is simply dummy text of the printing and typesetting industry.</P>


<p class="paragraphB">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p>`;
    array[5] = {
      portfolio1: portfolio[0].innerHTML,
      portfolio2: portfolio[1].innerHTML,
      portfolio3: portfolio[2].innerHTML,
    };

    const heading = document.querySelector(".heading");
    const canopy = document.querySelector(".canopy span");
    const backn = document.querySelector(".backend");
    const year = document.querySelector(".year");
    const image = document.querySelector(".img img");
    const p1 = document.querySelector(".p1");
    image.src = array[3];
    year.innerHTML = array[2].list2;
    backn.innerHTML = array[2].list1;
    canopy.innerHTML = array[1];
    heading.innerHTML = array[0];
    p1.innerHTML = array[4];
  });
}

const inputName = document.getElementById("username");
const inputEmail = document.getElementById("email");
const contactform = document.getElementById("contact");
const error = document.getElementById("errormessage");

contactform.addEventListener("submit", (e) => {
  const lowercaseEmail = inputEmail.value.toLowerCase();
  if (inputName.value === "" || inputName.value === null) {
    error.classList.add("error");
    error.innerHTML = "Please input your name";
    e.preventDefault();
  }
  if (inputEmail.value === "" || inputEmail.value !== lowercaseEmail) {
    error.classList.add("error");
    error.innerHTML = "Please input email in Lower case only";
    e.preventDefault();
  }
});

const input = document.getElementById("username");
const email = document.getElementById("email");
const message = document.querySelector(".messageinput");
const inputs = document.querySelectorAll(
  ".nameinput, .emailinput, .messageinput"
);
const obj = {};

for (let i = 0; i < inputs.length; i += 1) {
  inputs[i].addEventListener("input", () => {
    obj.name = input.value;
    obj.email = email.value;
    obj.messages = message.value;
    localStorage.setItem("formdata", JSON.stringify(obj));
  });
}

contactform.addEventListener("submit", () => {
  obj.name = input.value;
  obj.email = email.value;
  obj.messages = message.value;
  localStorage.setItem("formdata", JSON.stringify(obj));
});

window.addEventListener("load", () => {
  const name = document.getElementById("username");
  const eMail = document.getElementById("email");
  const msg = document.querySelector(".messageinput");
  console.log(msg);
  const json = localStorage.getItem("formdata");
  const data = JSON.parse(json);
  name.value = data.name;
  eMail.value = data.email;
  msg.value = data.messages;
});
