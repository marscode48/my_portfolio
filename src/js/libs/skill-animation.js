class SkillAnimation {
  constructor() {
    this.DOM = {};
    this.DOM.items = document.querySelectorAll('.skill__item');
    this.animate();
  }

  animate() {
    // 要素取得
    const stagger = 0.05;

    this.DOM.items.forEach((item) => {
      const img = item.querySelector('.skill__img');
      const rect = item.querySelector('.skill__name .rect');
      const label = item.querySelector('.skill__name .label');
      const slideX = item.querySelector('.skill__text.slideX');

      // タイムライン
      const skillTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // アニメーション
      skillTl.to(
        img,
        {
          keyframes: {
            '0%': { y: 45, autoAlpha: 0, ease: 'power4.in' },
            '24%': { autoAlpha: 1 },
            '25%': { y: 0, ease: 'power4.out' },
            '40%': { y: 24, ease: 'power4.in' },
            '55%': { y: 0, ease: 'power4.out' },
            '65%': { y: 12, ease: 'power4.in' },
            '75%': { y: 0, ease: 'power4.out' },
            '82%': { y: 6, ease: 'power4.in' },
            '87%': { y: 0, ease: 'power4.out' },
            '93%': { y: 4, ease: 'power4.in' },
            '100%': { y: 0, autoAlpha: 1, ease: 'power4.out' },
          },
          duration: 0.7,
        },
      );
      skillTl.fromTo(
        rect,
        {
          x: '-105%',
        },
        {
          x: '105%',
          duration: 1,
          stagger,
          ease: 'power3.inout',
        },
        '-=0.4',
      );
      skillTl.fromTo(
        label,
        {
          alpha: 0,
        },
        {
          alpha: 1,
          duration: 0.3,
          delay: 0.5,
          stagger,
        },
        '<',
      );
      skillTl.fromTo(
        slideX,
        {
          alpha: 0,
          x: -32,
        },
        {
          alpha: 1,
          x: 0,
          duration: 0.75,
          delay: 0.2,
          stagger,
          ease: 'power3.out',
        },
        '<',
      );
    });
  }
}
