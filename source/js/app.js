function Page() {
  this.wrapper = document.querySelector('.page-header-wrap');
  this.mainNavList = document.querySelector('.main-nav__list');
  this.mainNav = document.querySelector('.main-nav');
  this.navToggle = document.querySelector('.main-nav__toggle');
  this.header = document.querySelector('.header');
  this.headerImage = document.querySelector('.page-header__image');
  this.apps = document.querySelector('.apps');
  this.formButton = document.querySelector('.contest-form__send button');
  this.okPopup = document.querySelector('.popup--ok');
  this.failPopup = document.querySelector('.popup--fail');
  this.okPopupButton = document.querySelector('.popup__footer--ok button');
  this.failPopupButton = document.querySelector('.popup__footer--fail button');
  this.phoneInput = document.querySelector('input[type="tel"]');
  this.emailInput = document.querySelector('input[type="email"]');
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

Page.prototype.setupPopup = function () {
  if (this.formButton) {
    this.formButton.addEventListener("click", this.openPopup.bind(this));
  }

  if (this.okPopupButton) {
    this.okPopupButton.addEventListener("click", this.closeOkPopup.bind(this));
  }

  if (this.failPopupButton) {
    this.failPopupButton.addEventListener("click", this.closeFailPopup.bind(this));
  }
}

Page.prototype.openPopup = function (e) {
  var shouldShowFailPopup = !this.phoneInput.validity.valid && !this.emailInput.validity.valid;

  e.preventDefault();

  if (shouldShowFailPopup) {
    if (this.failPopup) {
      this.failPopup.classList.add('popup--open');
      this.failPopup.style.top = this.formButton.offsetTop + 'px';
    }
  } else {
    if (this.okPopup) {
      this.okPopup.classList.add('popup--open');
      this.okPopup.style.top = this.formButton.offsetTop + 'px';
    }
  }
}

Page.prototype.closeOkPopup = function (e) {
  if (this.okPopup) {
    this.okPopup.classList.remove('popup--open');
  }
}

Page.prototype.closeFailPopup = function (e) {
  if (this.failPopup) {
    this.failPopup.classList.remove('popup--open');
  }
}

function main() {
  var page = new Page();
  page.setupMenu();
  page.setupPopup();
}

document.addEventListener("DOMContentLoaded", main);
