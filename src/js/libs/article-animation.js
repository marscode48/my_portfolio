export class ArticleParallaxAnimation {
  constructor(ttl, img) {
    this.DOM = {};
    this.DOM.ttl = ttl instanceof HTMLElement ? ttl : document.querySelector(ttl);
    this.chars = this.DOM.ttl.innerHTML.trim().split('');
    this.DOM.ttl.innerHTML = this._splitText();
    this.DOM.chars = this.DOM.ttl.querySelectorAll('.char');
    this.DOM.img = document.querySelector(img);
    this.animate();
  }

  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, '');
  }

  animate() {
    const palTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.parallax',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
        pin: true,
        // markers: true,
      },
    });

    palTl.addLabel('topLabel');

    // 文字フェードアニメーション
    this.DOM.chars.forEach((c, i) => {
      palTl.fromTo(c, {
        autoAlpha: 0,
        y: 50,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.1,
      }, `topLabel+=${i / 20}`);
    });

    // パララックス
    palTl.fromTo(this.DOM.img, {
      backgroundPositionY: 0,
    },
    {
      backgroundPositionY: 100,
      duration: 1,
    }, 'topLabel');
  }
}
