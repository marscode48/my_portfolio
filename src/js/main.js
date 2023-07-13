document.addEventListener('DOMContentLoaded', () => {
  const main = new Main();
});

class Main {
  constructor() {
    this.header = document.querySelector('.header');
    this._init();
  }

  _init() {
    new MenuOpen();
    // this._scrollInit();
  }

  _navAnimation(el, inview) {
    if (inview) {
      this.header.classList.remove('triggered');
    } else {
      this.header.classList.add('triggered');
    }
  }

  _scrollInit() {
    new ScrollObserver('#js-nav-trigger', this._navAnimation.bind(this), { rootMargin: '100px', once: false });
  }
}
