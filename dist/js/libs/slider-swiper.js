"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var HeroSlider = /*#__PURE__*/function () {
  function HeroSlider(el, delay) {
    _classCallCheck(this, HeroSlider);
    this.el = el;
    this.delay = delay;
    this.timer = null;
    this.swiper = this._initSwiper();
  }
  _createClass(HeroSlider, [{
    key: "_initSwiper",
    value: function _initSwiper() {
      var _this = this;
      // スライド要素取得
      var slideLength = document.querySelectorAll('.js-works-hero .swiper-slide').length;
      var total = "00".concat(slideLength).slice(-2);
      var fractionNum = document.querySelector('.js-works-hero .fraction__num');
      var fractionTotal = document.querySelector('.js-works-hero .fraction__total');
      fractionTotal.textContent = total;

      // スライド番号の切り替え
      var updateFraction = function updateFraction(index) {
        var current = "00".concat(index + 1).slice(-2);
        console.log(fractionNum);
        fractionNum.classList.add('anm-started');
        setTimeout(function () {
          fractionNum.textContent = current;
        }, 400);
      };

      // スライド番号の削除
      var finishFraction = function finishFraction() {
        fractionNum.classList.remove('anm-started');
      };

      // アニメーション切り替え
      var switchAnimation = function switchAnimation() {
        clearTimeout(_this.timer);
        var activeSlide = document.querySelectorAll('.js-works-hero .swiper-slide[class*=-active]');
        for (var i = 0; i < activeSlide.length; i += 1) {
          activeSlide[i].classList.remove('anm-finished');
          activeSlide[i].classList.add('anm-started');
        }
        _this.timer = setTimeout(function () {
          for (var _i = 0; _i < activeSlide.length; _i += 1) {
            activeSlide[_i].classList.remove('anm-started');
            activeSlide[_i].classList.add('anm-finished');
          }
        }, _this.delay - 1000);
      };

      // アニメーション終了（手動でスライド切替された時）
      var finishAnimation = function finishAnimation() {
        var activeSlide = document.querySelectorAll('.js-works-hero .swiper-slide.anm-started');
        for (var i = 0; i < activeSlide.length; i += 1) {
          activeSlide[i].classList.remove('anm-started');
          activeSlide[i].classList.add('anm-finished');
        }
      };
      return new Swiper(this.el, {
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        loop: true,
        loopAdditionalSlides: 1,
        speed: 2000,
        followFinger: false,
        grabCursor: true,
        pagination: {
          el: '.js-works-hero .swiper-pagination',
          clickable: true
        },
        on: {
          slideChange: function slideChange(swiper) {
            updateFraction(swiper.realIndex);
            finishAnimation();
          },
          slideChangeTransitionStart: function slideChangeTransitionStart() {
            switchAnimation();
          },
          slideChangeTransitionEnd: function slideChangeTransitionEnd() {
            finishFraction();
          }
        }
      });
    }
  }, {
    key: "start",
    value: function start() {
      var customOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        delay: this.delay,
        disableOnInteraction: false,
        waitForTransition: false
      };
      var options = _objectSpread({
        delay: 4000,
        disableOnInteraction: false
      }, customOptions);
      this.swiper.params.autoplay = options;
      this.swiper.autoplay.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.swiper.autoplay.stop();
    }
  }]);
  return HeroSlider;
}();
//# sourceMappingURL=slider-swiper.js.map
