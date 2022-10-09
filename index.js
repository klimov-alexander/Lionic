/* Бургер меню */

let burger = document.querySelector(".burgeer");
let menu = document.querySelector(".header-nav");
let menuLinks = menu.querySelectorAll("nav-link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");

  menu.classList.toggle("header-nav--active");

  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");

    menu.classList.remove("header-nav--active");

    document.body.classList.remove("stop-scroll");
  });
});

let articlesMore = document.querySelector(".articles-more");
let articles = document.querySelectorAll(".articles-item");

articlesMore.addEventListener("click", function () {
  articles.forEach(function (al) {
    el.classList("articles-item--visible");
  });

  articlesMore
    .closest(".articles-center")
    .classList.add("articles-center--hidden");
});
