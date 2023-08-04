class AboutAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  animate() {
    const img = this.DOM.el.querySelector('.about__img');
    const text = this.DOM.el.querySelector('.about__text');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.DOM.el,
        start: 'top center+=100',
        end: 'top 20%',
        scrub: 1,
      },
    });

    tl.fromTo(
      img ,
      {
        autoAlpha: 0,
        y: 100,
        scale: 0.75,
      },
      {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        ease: 'none',
        duration: 2,
      },
    );
    tl.fromTo(
      text,
      {
        autoAlpha: 0,
        y: 100
      },
      {
        autoAlpha: 1,
        y: 0,
        ease: "none",
        duration: 2,
      },
      "-=0.5",
    );
  }
}
