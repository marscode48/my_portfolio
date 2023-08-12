"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AboutAnimation = /*#__PURE__*/function () {
  function AboutAnimation(el) {
    _classCallCheck(this, AboutAnimation);
    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }
  _createClass(AboutAnimation, [{
    key: "animate",
    value: function animate() {
      var img = this.DOM.el.querySelector('.about__img');
      var text = this.DOM.el.querySelector('.about__text');
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.DOM.el,
          start: 'top center+=100',
          end: 'top 20%',
          scrub: 1
        }
      });
      tl.fromTo(img, {
        autoAlpha: 0,
        y: 100,
        scale: 0.75
      }, {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        ease: 'none',
        duration: 2
      });
      tl.fromTo(text, {
        autoAlpha: 0,
        y: 100
      }, {
        autoAlpha: 1,
        y: 0,
        ease: 'none',
        duration: 2
      }, '-=0.5');
    }
  }]);
  return AboutAnimation;
}();
//# sourceMappingURL=about-animation.js.map
