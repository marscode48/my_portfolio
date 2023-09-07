"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SkillAnimation = /*#__PURE__*/function () {
  function SkillAnimation(el) {
    _classCallCheck(this, SkillAnimation);
    this.DOM = {};
    this.DOM.el = el;
    this.DOM.items = this.DOM.el.querySelectorAll('.skill__item');
    this.animate();
  }
  _createClass(SkillAnimation, [{
    key: "animate",
    value: function animate() {
      var _this = this;
      var mm = gsap.matchMedia();

      // motion-path (for Desctop)
      mm.add('(min-width: 600px)', function () {
        var pathTl = gsap.timeline({
          scrollTrigger: {
            trigger: _this.DOM.el,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            markers: true
          }
        });
        pathTl.fromTo('#polygon', {
          x: 0,
          y: 0
        }, {
          ease: 'none',
          motionPath: {
            // SVGのパスに沿って移動
            path: '#pc-path',
            align: '#pc-path',
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
          }
        });
      });

      // motion-path (for Mobile)
      mm.add('(max-width: 599px)', function () {
        var pathTl = gsap.timeline({
          scrollTrigger: {
            trigger: _this.DOM.el,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            markers: true
          }
        });
        pathTl.fromTo('#polygon', {
          x: 0,
          y: 0
        }, {
          ease: 'none',
          motionPath: {
            // SVGのパスに沿って移動
            path: '#sp-path',
            align: '#sp-path',
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
          }
        });
      });

      // text-animation
      var stagger = 0.05;
      this.DOM.items.forEach(function (item) {
        var img = item.querySelector('.skill__img');
        var rect = item.querySelector('.skill__name .rect');
        var label = item.querySelector('.skill__name .label');
        var slideX = item.querySelector('.skill__text.slideX');
        var skillTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        });
        skillTl.to(img, {
          keyframes: {
            '0%': {
              y: 45,
              autoAlpha: 0,
              ease: 'power4.in'
            },
            '24%': {
              autoAlpha: 1
            },
            '25%': {
              y: 0,
              ease: 'power4.out'
            },
            '40%': {
              y: 24,
              ease: 'power4.in'
            },
            '55%': {
              y: 0,
              ease: 'power4.out'
            },
            '65%': {
              y: 12,
              ease: 'power4.in'
            },
            '75%': {
              y: 0,
              ease: 'power4.out'
            },
            '82%': {
              y: 6,
              ease: 'power4.in'
            },
            '87%': {
              y: 0,
              ease: 'power4.out'
            },
            '93%': {
              y: 4,
              ease: 'power4.in'
            },
            '100%': {
              y: 0,
              autoAlpha: 1,
              ease: 'power4.out'
            }
          },
          duration: 0.7
        });
        skillTl.fromTo(rect, {
          x: '-105%'
        }, {
          x: '105%',
          duration: 1,
          stagger: stagger,
          ease: 'power3.inout'
        }, '-=0.4');
        skillTl.fromTo(label, {
          alpha: 0
        }, {
          alpha: 1,
          duration: 0.3,
          delay: 0.5,
          stagger: stagger
        }, '<');
        skillTl.fromTo(slideX, {
          alpha: 0,
          x: -32
        }, {
          alpha: 1,
          x: 0,
          duration: 0.75,
          delay: 0.2,
          stagger: stagger,
          ease: 'power3.out'
        }, '<');
      });
    }
  }]);
  return SkillAnimation;
}();
//# sourceMappingURL=skill-animation.js.map
