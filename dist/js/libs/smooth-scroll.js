"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SmoothScroll = /*#__PURE__*/function () {
  function SmoothScroll(gap) {
    _classCallCheck(this, SmoothScroll);
    this.DOM = {};
    this.gap = gap;
    this.DOM.links = document.querySelectorAll('a[href^="#"]');
    this._smoothScroll();
  }
  _createClass(SmoothScroll, [{
    key: "_smoothScroll",
    value: function _smoothScroll() {
      var _this = this;
      this.DOM.links.forEach(function (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          var hrefLink = link.getAttribute('href');
          var targetContent = document.getElementById(hrefLink.replace('#', ''));
          var rectTop = targetContent.getBoundingClientRect().top;
          var positionY = window.pageYOffset;
          var target = rectTop + positionY + _this.gap;
          window.scrollTo({
            top: target,
            behavior: 'smooth'
          });
        });
      });
    }
  }]);
  return SmoothScroll;
}();
//# sourceMappingURL=smooth-scroll.js.map
