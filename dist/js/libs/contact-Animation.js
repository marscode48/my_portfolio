"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ContactAnimation = /*#__PURE__*/function () {
  function ContactAnimation(el) {
    _classCallCheck(this, ContactAnimation);
    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }
  _createClass(ContactAnimation, [{
    key: "animate",
    value: function animate() {
      var inner = this.DOM.el.querySelector('.contact__inner');
      var left = this.DOM.el.querySelector('.contact__left');
      var right = this.DOM.el.querySelector('.contact__right');
      var link = this.DOM.el.querySelector('.contact__link');
      var btn = this.DOM.el.querySelector('.contact__btn');
      ScrollTrigger.create({
        trigger: inner,
        start: 'top 50%',
        toggleClass: 'bg-active'
        // markers: true,
      });

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.DOM.el,
          start: 'top center-=50',
          end: 'top 10%',
          scrub: 1
          // markers: true,
        }
      });

      tl.fromTo(left, {
        scale: 3,
        autoAlpha: 0,
        xPercent: -100,
        rotation: 2,
        skewX: '10deg'
      }, {
        scale: 1,
        autoAlpha: 1,
        xPercent: 0,
        rotation: 0,
        skewX: '-10deg'
      });
      tl.fromTo(right, {
        scale: 3,
        autoAlpha: 0,
        xPercent: 100,
        rotation: -2,
        skewX: '10deg'
      }, {
        autoAlpha: 1,
        xPercent: 0,
        scale: 1,
        rotation: 0,
        skewX: '-10deg'
      }, '<');
      tl.add(function () {
        btn.classList.toggle('gradietion-active');
      }, '>');
      tl.fromTo(link, {
        autoAlpha: 0,
        scale: 0,
        yPercent: 25
      }, {
        autoAlpha: 1,
        scale: 1,
        yPercent: 0
      }, '<');
    }
  }]);
  return ContactAnimation;
}();
//# sourceMappingURL=contact-animation.js.map
