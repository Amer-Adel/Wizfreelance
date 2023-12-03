// Main nav on phones screen
let navMenu = document.querySelector("nav");

let navIcon = document.querySelector("header i");
navIcon.onclick = () => {
  navIcon.classList.toggle("fa-x");
  navIcon.classList.toggle("fa-bars");
  navMenu.style.display = navIcon.classList.contains("fa-x") ? "block" : "none";
}

let navLinks = document.querySelectorAll("nav a");
for (let i = 0; i < navLinks.length; i++)
  navLinks[i].onclick = () => {
    navIcon.classList.remove("fa-x");
    navIcon.classList.add("fa-bars");
    navMenu.style.display = "none";
  }