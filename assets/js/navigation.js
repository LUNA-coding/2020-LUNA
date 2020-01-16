var menuButton = document.querySelector(".nav__side-menu-button");
var sideMenu = document.querySelector(".nav__side-menu");
var sideOverlay = document.querySelector(".nav__side-overlay");

menuButton.addEventListener('click', function(event) {
  sideMenu.classList.add('nav__side-menu--visible');
  sideOverlay.classList.add('nav__side-overlay--visible');
  console.log('wow');
});

sideOverlay.addEventListener('click', function(event) {
  sideMenu.classList.remove('nav__side-menu--visible');
  sideOverlay.classList.remove('nav__side-overlay--visible');
});