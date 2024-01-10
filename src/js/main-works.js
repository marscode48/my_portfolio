import { MenuOpen } from 'menu-open';
import { ThreeAnimation } from 'three-animation';
// import { HeroSlider } from 'slider-swiper';
import { SmoothScroll } from 'smooth-scroll';
import { ScrollObserver } from 'scroll-observer';
import { TextAnimation, TweenTextAnimation } from 'text-animation';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(MotionPathPlugin);
  const main = new Main();
});

class Main {
  constructor() {
    this.header = document.querySelector('.header');
    // this.hero = new HeroSlider('.works-hero.swiper', '4000');
    this.#init();
  }

  #init() {
    new ThreeAnimation();
    new MenuOpen();
    new SmoothScroll(0);
    this.#scrollInit();
  }

  #scrollInit() {
    new ScrollObserver('.nav-trigger', this.#navAnimation.bind(this), { once: false });
    new ScrollObserver('.appear', this.#inviewAnimation);
    new ScrollObserver('.tween-animate-title', this.#textAnimation, { rootMargin: '-50px 0px' });
  }

  #textAnimation(el, inview) {
    if (inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  // #toggleHeroAnimation(el, inview) {
  //   if (inview) {
  //     this.hero.start();
  //     console.log('hero start is called');
  //   } else {
  //     this.hero.stop();
  //     console.log('hero stop is called');
  //   }
  // }

  #navAnimation(el, inview) {
    if (inview) {
      this.header.classList.remove('triggered');
    } else {
      this.header.classList.add('triggered');
    }
  }

  #inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add('inview');
    }
  }
}
