let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

// ----------About Section----------

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("about-content");

function opentab(tab){
  for ( var tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for (var tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  window.event.currentTarget.classList.add("active-link");
  document.getElementById(tab).classList.add("active-tab");
}