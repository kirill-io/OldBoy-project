export default class StickyHeader {
  constructor({ headerSelector, substrateSelector }) {
    this._header = document.querySelector(headerSelector);
    this._substrate = document.querySelector(substrateSelector);
    this._headerState = true;
  }

  enableStickyHeader() {
    this._setHeaderHeight();
    this._pageScrollHandler();
  }

  _setHeaderHeight() {
    this._headerHeight = this._header.offsetHeight;
    this._substrate.style.height = `${this._header.offsetHeight}px`;
  }

  _setScrollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  _hideHeader() {
    this._header.style.background = 'rgba(00, 00, 00, .5)';
    this._headerState = false;
  }

  _showHeader() {
    this._header.style.background = 'none';
    this._headerState = true;
  }

  _pageScrollHandler() {
    window.addEventListener('scroll', () => {
      this._setHeaderHeight();
      if (        
        this._setScrollPosition() &&
        this._headerState
      ) {
        this._hideHeader();
      } else if (
        !this._setScrollPosition() &&
        !this._headerState
      ) {
        this._showHeader();
      }
    });
  }
}
