var menuButton = document.querySelector(".nav__side-menu-button");
var sideMenu = document.querySelector(".nav__side-menu");
var closeButton = document.querySelector(".nav__side-menu-close");

menuButton.addEventListener('click', function(event) {
  sideMenu.classList.add('nav__side-menu--visible');
});

closeButton.addEventListener('click', function(event) {
  sideMenu.classList.remove('nav__side-menu--visible');
});