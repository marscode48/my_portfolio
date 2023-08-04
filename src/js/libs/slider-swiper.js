class HeroSlider {
  constructor(el, delay) {
    this.el = el;
    this.delay = delay;
    this.timer = null;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    // スライド要素取得
    const slideLength = document.querySelectorAll('.js-works-hero .swiper-slide').length;
    const total = (`00${slideLength}`).slice(-2);
    const fractionNum = document.querySelector('.js-works-hero .fraction__num');
    const fractionTotal = document.querySelector('.js-works-hero .fraction__total');
    fractionTotal.textContent = total;

    // スライド番号の切り替え
    const updateFraction = (index) => {
      const current = (`00${index + 1}`).slice(-2);
      fractionNum.classList.add('anm-started');
      setTimeout(() => {
        fractionNum.textContent = current;
      }, 400);
    };

    // スライド番号の削除
    const finishFraction = () => {
      fractionNum.classList.remove('anm-started');
    };


    // アニメーション切り替え
    const switchAnimation = () => {
      clearTimeout(this.timer);
      const activeSlide = document.querySelectorAll('.js-works-hero .swiper-slide[class*=-active]');
      for (let i = 0; i < activeSlide.length; i += 1) {
        activeSlide[i].classList.remove('anm-finished');
        activeSlide[i].classList.add('anm-started');
      }

      this.timer = setTimeout(() => {
        for (let i = 0; i < activeSlide.length; i += 1) {
          activeSlide[i].classList.remove('anm-started');
          activeSlide[i].classList.add('anm-finished');
        }
      }, this.delay - 1000);
    };

    // アニメーション終了（手動でスライド切替された時）
    const finishAnimation = () => {
      const activeSlide = document.querySelectorAll('.js-works-hero .swiper-slide.anm-started');
      for (let i = 0; i < activeSlide.length; i += 1) {
        activeSlide[i].classList.remove('anm-started');
        activeSlide[i].classList.add('anm-finished');
      }
    };

    return new Swiper(this.el, {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      loop: true,
      loopAdditionalSlides: 1,
      speed: 2000,
      followFinger: false,
      grabCursor: true,
      pagination: {
        el: '.js-works-hero .swiper-pagination',
        clickable: true,
      },
      on: {
        slideChange(swiper) {
          updateFraction(swiper.realIndex);
          finishAnimation();
        },
        slideChangeTransitionStart() {
          switchAnimation();
        },
        slideChangeTransitionEnd() {
          finishFraction();
        },
      },
    });
  }

  start(customOptions = {
    delay: this.delay,
    disableOnInteraction: false,
    waitForTransition: false,
  }) {
    const options = {
      delay: 4000,
      disableOnInteraction: false,
      ...customOptions,
    };

    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }

  stop() {
    this.swiper.autoplay.stop();
  }
}
