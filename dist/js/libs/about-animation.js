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
      // Horizontal
      var inner = this.DOM.el.querySelector('.about__inner');
      var wrapper = this.DOM.el.querySelector('.about__list-wrapper');
      var list = this.DOM.el.querySelector('.about__list');
      var img = this.DOM.el.querySelector('.about__img');
      var line = this.DOM.el.querySelector('.about__line');
      var lineIner = this.DOM.el.querySelector('.about__line-inner');
      var sections = Array.from(list.children);
      var scrollTween = gsap.to(list, {
        // リスト最後尾をラッパー右端に合わせる（リスト – ラッパー）
        x: function x() {
          return -(list.clientWidth - wrapper.clientWidth);
        },
        ease: 'none',
        scrollTrigger: {
          trigger: this.DOM.el,
          start: 'top 5%',
          end: function end() {
            return "+=".concat(list.clientWidth - wrapper.clientWidth);
          },
          scrub: true,
          pin: true,
          anticipatePin: 1,
          // ページのガタつきを防ぐ
          invalidateOnRefresh: true // リサイズ時に再計算
          // markers: true,
        }
      });

      // inner-active
      ScrollTrigger.create({
        trigger: sections,
        start: 'top 75%',
        toggleClass: {
          targets: inner,
          className: 'about-inner-active'
        },
        once: true
        // markers: true,
      });

      // img-scrub
      gsap.fromTo(img, {
        y: 15,
        scale: 0.75
      }, {
        scale: 1,
        y: 0,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: this.DOM.el,
          start: 'top 5%',
          end: function end() {
            return "+=".concat(list.clientWidth - wrapper.clientWidth);
          },
          scrub: 2
          // markers: true,
        }
      });

      // scroll-line
      var lineTl = gsap.timeline({
        scrollTrigger: {
          trigger: this.DOM.el,
          start: 'top 5%',
          end: function end() {
            return "+=".concat(list.clientWidth - wrapper.clientWidth);
          },
          scrub: true,
          // markers: true,
          onEnter: function onEnter() {
            // console.log('onEnter is called');
            line.classList.add('line-active');
          },
          onEnterBack: function onEnterBack() {
            // console.log('onEnterBack is called');
            line.classList.add('line-active');
          },
          onLeaveBack: function onLeaveBack() {
            // console.log('onLeaveBack is called');
            line.classList.remove('line-active');
          },
          onLeave: function onLeave() {
            // console.log('onLeave is called');
            line.classList.remove('line-active');
          }
        }
      });
      lineTl.fromTo(lineIner, {
        width: 0
      }, {
        width: '100%'
      });

      // text-section
      sections.forEach(function (section) {
        var numberWrapper = section.querySelector('.about__item-content-number-wrapper');
        var number = section.querySelector('.about__item-content-number');
        var title = section.querySelector('.about__item-content-title');
        var texts = section.querySelectorAll('.about__item-content-text');

        // タイムライン
        var aboutTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: 'left 60%'
            // markers: true,
          }
        });

        aboutTl.fromTo(number, {
          opacity: 0
        }, {
          opacity: 1,
          yPercent: -100,
          duration: 0.2,
          ease: 'power4.easeOut'
        });
        aboutTl.to(number, {
          xPercent: 150,
          skewX: -20,
          duration: 0.8,
          ease: 'power4.easeOut'
        }, '>');
        aboutTl.add(function () {
          numberWrapper.classList.toggle('content-number-wrapper-active');
        }, '<');
        aboutTl.from(title, {
          y: 50,
          opacity: 0,
          duration: 0.4,
          ease: 'power4.easeOut'
        }, '<');
        aboutTl.from(texts, {
          x: 128,
          opacity: 0,
          duration: 0.8,
          ease: 'Back.easeOut',
          stagger: 0.3
        }, '>');
        aboutTl.add(function () {
          title.classList.toggle('underline-active');
          section.classList.toggle('box-shadow-active');
        }, '>');
      });
    }
  }]);
  return AboutAnimation;
}();
//# sourceMappingURL=about-animation.js.map
