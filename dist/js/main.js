"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);
  var main = new Main();
});
var _init = /*#__PURE__*/new WeakSet();
var _scrollInit = /*#__PURE__*/new WeakSet();
var _textAnimation = /*#__PURE__*/new WeakSet();
var _toggleHeroAnimation = /*#__PURE__*/new WeakSet();
var _skillAnimation = /*#__PURE__*/new WeakSet();
var _aboutAnimation = /*#__PURE__*/new WeakSet();
var _contactAnimation = /*#__PURE__*/new WeakSet();
var _navAnimation = /*#__PURE__*/new WeakSet();
var _inviewAnimation = /*#__PURE__*/new WeakSet();
var Main = /*#__PURE__*/_createClass(function Main() {
  _classCallCheck(this, Main);
  _classPrivateMethodInitSpec(this, _inviewAnimation);
  _classPrivateMethodInitSpec(this, _navAnimation);
  _classPrivateMethodInitSpec(this, _contactAnimation);
  _classPrivateMethodInitSpec(this, _aboutAnimation);
  _classPrivateMethodInitSpec(this, _skillAnimation);
  _classPrivateMethodInitSpec(this, _toggleHeroAnimation);
  _classPrivateMethodInitSpec(this, _textAnimation);
  _classPrivateMethodInitSpec(this, _scrollInit);
  _classPrivateMethodInitSpec(this, _init);
  this.header = document.querySelector('.header');
  this.hero = new HeroSlider('.js-works-hero.swiper', '4000');
  _classPrivateMethodGet(this, _init, _init2).call(this);
});
function _init2() {
  new MenuOpen();
  _classPrivateMethodGet(this, _scrollInit, _scrollInit2).call(this);
}
function _scrollInit2() {
  new ScrollObserver('#js-nav-trigger', _classPrivateMethodGet(this, _navAnimation, _navAnimation2).bind(this), {
    rootMargin: '100px',
    once: false
  });
  new ScrollObserver('.js-works-hero', _classPrivateMethodGet(this, _toggleHeroAnimation, _toggleHeroAnimation2).bind(this), {
    once: false
  });
  new ScrollObserver('.appear', _classPrivateMethodGet(this, _inviewAnimation, _inviewAnimation2));
  new ScrollObserver('.tween-animate-title', _classPrivateMethodGet(this, _textAnimation, _textAnimation2), {
    rootMargin: '-100px 0px'
  });
  new ScrollObserver('.skill', _classPrivateMethodGet(this, _skillAnimation, _skillAnimation2));
  new ScrollObserver('.about', _classPrivateMethodGet(this, _aboutAnimation, _aboutAnimation2));
  new ScrollObserver('.contact', _classPrivateMethodGet(this, _contactAnimation, _contactAnimation2));
}
function _textAnimation2(el, inview) {
  if (inview) {
    var ta = new TweenTextAnimation(el);
    ta.animate();
  }
}
function _toggleHeroAnimation2(el, inview) {
  if (inview) {
    this.hero.start();
    console.log('hero start is called');
  } else {
    this.hero.stop();
    console.log('hero stop is called');
  }
}
function _skillAnimation2(el, inview) {
  if (inview) {
    new SkillAnimation();
  }
}
function _aboutAnimation2(el, inview) {
  if (inview) {
    new AboutAnimation(el);
  }
}
function _contactAnimation2(el, inview) {
  if (inview) {
    new ContactAnimation(el);
  }
}
function _navAnimation2(el, inview) {
  if (inview) {
    this.header.classList.remove('triggered');
  } else {
    this.header.classList.add('triggered');
  }
}
function _inviewAnimation2(el, inview) {
  if (inview) {
    el.classList.add('inview');
  }
}
//# sourceMappingURL=main.js.map
