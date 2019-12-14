function Page() {
  this.wrapper = document.querySelector('.page-header-wrap');
  this.mainNavList = document.querySelector('.main-nav__list');
  this.mainNav = document.querySelector('.main-nav');
  this.navToggle = document.querySelector('.main-nav__toggle');
  this.header = document.querySelector('.header');
  this.headerImage = document.querySelector('.page-header__image');
  this.apps = document.querySelector('.apps');
}

Page.prototype.setupMenu = function () {
  this.mainNav.classList.add('main-nav--closed');
  this.mainNavList.classList.add('main-nav__list--closed');
  this.wrapper.classList.add('page-header-wrap--closed');
  this.navToggle.classList.add('main-nav__toggle--closed');
  this.header.classList.add('header--closed');


  if (this.headerImage) {
    this.headerImage.classList.add('page-header__image--closed');
  }

  if (this.apps) {
    this.apps.classList.toggle('apps--closed');
  }

  this.navToggle.addEventListener("click", this.toggleMenu.bind(this));
}

Page.prototype.toggleMenu = function () {
  this.mainNav.classList.toggle('main-nav--closed');
  this.navToggle.classList.toggle('main-nav__toggle--closed');
  this.mainNavList.classList.toggle('main-nav__list--closed');
  this.wrapper.classList.toggle('page-header-wrap--closed');

  this.header.classList.toggle('header--closed');

  if (this.headerImage) {
    this.headerImage.classList.toggle('page-header__image--closed');
  }

  if (this.apps) {
    this.apps.classList.toggle('apps--closed');
  }

}

function main() {
  var page = new Page();
  page.setupMenu();
}

document.addEventListener("DOMContentLoaded", main);
