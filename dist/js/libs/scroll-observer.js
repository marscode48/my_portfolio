"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ScrollObserver = /*#__PURE__*/function () {
  function ScrollObserver(els, cb, options) {
    _classCallCheck(this, ScrollObserver);
    this.els = document.querySelectorAll(els);
    var defaultOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
      once: true
    };
    this.cb = cb;
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;
    this._init();
  }
  _createClass(ScrollObserver, [{
    key: "_init",
    value: function _init() {
      var _this2 = this;
      var callback = function callback(entries, observer) {
        var _this = this;
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            _this.cb(entry.target, true);
            if (_this.once) {
              observer.unobserve(entry.target);
            }
          } else {
            _this.cb(entry.target, false);
          }
        });
      };
      this.io = new IntersectionObserver(callback.bind(this), this.options);

      // @see https://github.com/w3c/IntersectionObserver/tree/master/polyfill
      this.io.POLL_INTERVAL = 100;
      this.els.forEach(function (el) {
        return _this2.io.observe(el);
      });
    }
  }]);
  return ScrollObserver;
}();
//# sourceMappingURL=scroll-observer.js.map
