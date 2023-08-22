// 1st Version
// const navItems = document.querySelectorAll(".nav-item");

// navItems.forEach(item => {
//   item.addEventListener("click", e => {
//     e.preventDefault();
//     window.location.href = item.href;
//     navItems.forEach(item => {
//       item.classList.remove("active");
//       if (item.href === window.location.href) {
//         item.classList.add("active");
//         e.stopPropagation();
//       }
//     });
//     console.log(item.href, window.location.href);
//   });
// });

// window.addEventListener("click", function (e) {
//   navItems.forEach(item => {
//     item.classList.remove("active");
//   });
// });

const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = function () {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};

// 2nd Version
// const navItems = document.querySelectorAll(".nav-item");

// const navHome = document.getElementById("nav-home");
// navHome.addEventListener("click", function (e) {
//   navItems.forEach(item => {
//     item.classList.remove("active");
//   });
//   navHome.classList.add("active");
// });
// const navPortfolio = document.getElementById("nav-portfolio");
// navPortfolio.addEventListener("click", function (e) {
//   navItems.forEach(item => {
//     item.classList.remove("active");
//   });
//   navPortfolio.classList.add("active");
// });
// const navContact = document.getElementById("nav-contact");
// navContact.addEventListener("click", function (e) {
//   navItems.forEach(item => {
//     item.classList.remove("active");
//   });
//   navContact.classList.add("active");
// });
