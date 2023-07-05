class MenuOpen {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('#js-btn-menu');
    this.DOM.mask = document.querySelector('#js-mask');
    this.DOM.wrapper = document.querySelector('.wrapper');
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
    this.DOM.wrapper.classList.toggle('menu-open');
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.mask.addEventListener(this.eventType, this._toggle.bind(this));
  }
}
