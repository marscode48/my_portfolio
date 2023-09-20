export class MenuOpen {
  constructor() {
    this.DOM = {};
    this.DOM.header = document.querySelector('.header');
    this.DOM.navi = document.querySelector('.gnav');
    this.DOM.btn = document.querySelector('.header__btn');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    const isTouchCapable = 'ontouchstart' in window
      || (window.DocumentTouch && document instanceof window.DocumentTouch)
      || navigator.maxTouchPoints > 0
      || window.navigator.msMaxTouchPoints > 0;

    return isTouchCapable ? 'touchstart' : 'click';
  }

  _toggle() {
    this.DOM.header.classList.toggle('menu-open');
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this), { passive: true });
    this.DOM.navi.addEventListener(this.eventType, this._toggle.bind(this), { passive: true });
  }
}

//# sourceMappingURL=menu-open.js.map
