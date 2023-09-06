"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var WorksAnimation = /*#__PURE__*/function () {
  function WorksAnimation(el) {
    _classCallCheck(this, WorksAnimation);
    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }
  _createClass(WorksAnimation, [{
    key: "animate",
    value: function animate() {
      var _this = this;
      var bg = this.DOM.el.querySelector('.works__inner');
      var img = this.DOM.el.querySelector('.works__img-wrapper');
      var text = this.DOM.el.querySelector('.works__text');
      var link = this.DOM.el.querySelector('.works__link');
      var btn = this.DOM.el.querySelector('.works__btn');
      var mm = gsap.matchMedia();

      // for Desctop
      mm.add('(min-width: 960px)', function () {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: _this.DOM.el,
            start: 'top 55%'
            // markers: true
          }
        });

        tl.add(function () {
          bg.classList.add('bg-active');
        });
        tl.fromTo(img, {
          autoAlpha: 0,
          x: -100
        }, {
          autoAlpha: 1,
          x: 0,
          ease: 'power4.out',
          duration: 1.5
        });
        tl.fromTo(text, {
          autoAlpha: 0,
          x: 100
        }, {
          autoAlpha: 1,
          x: 0,
          ease: 'power4.out',
          duration: 1
        }, '-=1');
        tl.fromTo(link, {
          autoAlpha: 0,
          x: 100
        }, {
          autoAlpha: 1,
          x: 0,
          ease: 'power4.out',
          duration: 1
        }, '-=0.75');
        tl.add(function () {
          btn.classList.add('gradietion-active');
        }, '<');
      });

      // for Mobile
      mm.add('(max-width: 959px)', function () {
        var tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: img,
            start: 'top 90%'
            // markers: true
          }
        });

        tl1.add(function () {
          bg.classList.add('bg-active');
        });
        tl1.fromTo(img, {
          autoAlpha: 0,
          y: 100
        }, {
          autoAlpha: 1,
          y: 0,
          ease: 'power4.out',
          duration: 1.5
        });
        var tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: text,
            start: 'top 95%'
            // markers: true,
          }
        });

        tl2.fromTo(text, {
          autoAlpha: 0,
          y: 100
        }, {
          autoAlpha: 1,
          y: 0,
          ease: 'power4.out',
          duration: 1
        });
        tl2.fromTo(link, {
          autoAlpha: 0,
          y: 100
        }, {
          autoAlpha: 1,
          y: 0,
          ease: 'power4.out',
          duration: 1
        }, '-=0.75');
        tl2.add(function () {
          btn.classList.add('gradietion-active');
        }, '<');
      });
    }
  }]);
  return WorksAnimation;
}();
//# sourceMappingURL=works-animation.js.map
