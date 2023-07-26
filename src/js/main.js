document.addEventListener('DOMContentLoaded', () => {
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

  #navAnimation(el, inview) {
    if (inview) {
      this.header.classList.remove('triggered');
    } else {
      this.header.classList.add('triggered');
    }
  }

  #scrollInit() {
    new ScrollObserver('#js-nav-trigger', this.#navAnimation.bind(this), { rootMargin: '100px', once: false });
    new ScrollObserver('.js-works-hero', this.#toggleHeroAnimation.bind(this), { once: false });
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
}
