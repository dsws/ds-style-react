import _classCallCheck from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';

// This is a copy of https://github.com/CassetteRocks/react-infinite-scroller with https://github.com/CassetteRocks/react-infinite-scroller/pull/38/files merged
var InfiniteScroll =
/*#__PURE__*/
function (_Component) {
  _inherits(InfiniteScroll, _Component);

  function InfiniteScroll(props) {
    var _this;

    _classCallCheck(this, InfiniteScroll);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InfiniteScroll).call(this, props));

    _this.detachScrollListener = function () {};

    _this.scrollListener = _this.scrollListener.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InfiniteScroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.pageLoaded = this.props.pageStart;
      this.attachScrollListener();

      if (this.props.initialLoad) {
        this.scrollListener();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.attachScrollListener();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          hasMore = _this$props.hasMore,
          loader = _this$props.loader,
          scrollElement = _this$props.scrollElement,
          dataHook = _this$props.dataHook;
      var ref;

      if (scrollElement) {
        ref = function ref() {
          return _this2.scrollComponent = scrollElement;
        };
      } else {
        ref = function ref(node) {
          return _this2.scrollComponent = node;
        };
      }

      return React.createElement('div', {
        ref: ref,
        'data-hook': dataHook
      }, children, hasMore && (loader || this._defaultLoader));
    }
  }, {
    key: "calculateTopPosition",
    value: function calculateTopPosition(el) {
      if (!el) {
        return 0;
      }

      return el.offsetTop + this.calculateTopPosition(el.offsetParent);
    }
  }, {
    key: "scrollListener",
    value: function scrollListener() {
      var el = this.scrollComponent;
      var offset;

      if (this.props.scrollElement) {
        if (this.props.isReverse) {
          offset = el.scrollTop;
        } else {
          offset = el.scrollHeight - el.scrollTop - el.clientHeight;
        }
      } else if (this.props.useWindow) {
        var scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if (this.props.isReverse) {
          offset = scrollTop;
        } else {
          offset = this.calculateTopPosition(el) + el.offsetHeight - scrollTop - window.innerHeight;
        }
      } else if (this.props.isReverse) {
        offset = el.parentNode.scrollTop;
      } else {
        offset = el.scrollHeight - el.parentNode.scrollTop - el.parentNode.clientHeight;
      }

      if (offset < Number(this.props.threshold)) {
        this.detachScrollListener(); // Call loadMore after detachScrollListener to allow for non-async loadMore functions

        if (typeof this.props.loadMore === 'function') {
          this.props.loadMore(this.pageLoaded += 1);
        }
      }
    }
  }, {
    key: "attachScrollListener",
    value: function attachScrollListener() {
      var _this3 = this;

      this.detachScrollListener();

      if (!this.props.hasMore) {
        return;
      }

      var scrollEl = window;

      if (this.props.scrollElement) {
        scrollEl = this.scrollComponent;
      } else if (this.props.useWindow === false) {
        scrollEl = this.scrollComponent.parentNode;
      }

      scrollEl.addEventListener('scroll', this.scrollListener);
      scrollEl.addEventListener('resize', this.scrollListener);

      this.detachScrollListener = function () {
        scrollEl.removeEventListener('scroll', _this3.scrollListener);
        scrollEl.removeEventListener('resize', _this3.scrollListener);

        _this3.detachScrollListener = function () {};
      };
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.detachScrollListener();
    } // Set a default loader for all your `InfiniteScroll` components

  }, {
    key: "setDefaultLoader",
    value: function setDefaultLoader(loader) {
      this._defaultLoader = loader;
    }
  }]);

  return InfiniteScroll;
}(Component);

InfiniteScroll.defaultProps = {
  hasMore: false,
  initialLoad: true,
  pageStart: 0,
  threshold: 250,
  useWindow: true,
  isReverse: false,
  scrollElement: null
};
export { InfiniteScroll as default };