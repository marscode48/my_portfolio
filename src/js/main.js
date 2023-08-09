document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  const main = new Main();
});

class Main {
  constructor() {
    this.header = document.querySelector('.header');
    this.hero = new HeroSlider('.js-works-hero.swiper', '4000');
    this.#init();
  }

  #init() {
    new MenuOpen();
    this.#scrollInit();
  }

  #scrollInit() {
    new ScrollObserver('#js-nav-trigger', this.#navAnimation.bind(this), { rootMargin: '100px', once: false });
    new ScrollObserver('.js-works-hero', this.#toggleHeroAnimation.bind(this), { once: false });
    new ScrollObserver('.appear', this.#inviewAnimation);
    new ScrollObserver('.tween-animate-title', this.#textAnimation, { rootMargin: '-100px 0px' });
    new ScrollObserver('.skill', this.#skillAnimation);
    new ScrollObserver('.about', this.#aboutAnimation);
    new ScrollObserver('.contact', this.#contactAnimation);
  }

  #textAnimation(el, inview) {
    if (inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  #toggleHeroAnimation(el, inview) {
    if (inview) {
      this.hero.start();
      console.log('hero start is called');
    } else {
      this.hero.stop();
      console.log('hero stop is called');
    }
  }

  #skillAnimation(el, inview) {
    if (inview) {
      new SkillAnimation();
    }
  }

  #aboutAnimation(el, inview) {
    if (inview) {
      new AboutAnimation(el);
    }
  }
  
  #contactAnimation(el, inview) {
    if (inview) {
      new ContactAnimation(el);
    }
  }

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
