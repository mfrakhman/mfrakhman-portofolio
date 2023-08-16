// 1st Version
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    window.location.href = item.href;
    navItems.forEach(item => {
      item.classList.remove("active");
      if (item.href === window.location.href) {
        item.classList.add("active");
        e.stopPropagation();
      }
    });
    console.log(item.href, window.location.href);
  });
});

window.addEventListener("click", function (e) {
  navItems.forEach(item => {
    item.classList.remove("active");
  });
});

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
