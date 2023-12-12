// access by Id
// const title = document.getElementById("titleCountry");
console.log(title);

// ACCESS BY CLASS NAME
// const country = document.getElementsByClassName("country");
console.log(country);
for (let i = 0; i < country.length; i++) {
  console.log(country[i]);
}

// ACCESS BY Tag Name

const getTag = document.getElementsByTagName("li");
console.log(getTag);

// Query Selector

const title = document.querySelector("#titleCountry");
title.style.backgroundColor = "red";
title.style.fontSize = "70px";
title.style.color = "White";
title.style.textAlign = "center";

const list = document.querySelector("#List");
const country = document.querySelectorAll(".country");

const li = document.createElement("span");
const ul = document.querySelector("ul");

ul.append(li);

const parent = document.querySelector("#parent");
console.log(parent);
parent.setAttribute("class", "mainContainer");
parent.setAttribute("width", "300px");
console.log(parent.getAttribute("id"));

const newCountry = document.querySelector(".country");
console.log(newCountry);
newCountry.classList.add("newClass");

const titleCountry = document.querySelector("#titleCountry");
const bgChangerBtn = document.querySelector("#bgChangerBtn");

bgChangerBtn.addEventListener("click", function () {
  titleCountry.classList.toggle("bgChanger");
  titleCountry.style.color = "red";
});

const userText = document.querySelector("#userText");
const getTextBtn = document.querySelector("#getTextbtn");

getTextBtn.addEventListener("click", function () {
  console.log(userText.value);
  userText.value = "";
});
