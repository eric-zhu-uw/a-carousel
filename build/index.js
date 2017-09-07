'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  carousel: {
    // display: 'flex',
    // flexFlow: 'row wrap',
    // justifyContent: 'center',
    // alignItems: 'center',
    overflow: 'hidden'
  },

  container: {
    display: 'inline-block',
    position: 'relative'
    // overflow: 'hidden',
    // top: '0',
    // left: '0',
    // zIndex: '20',
  },
  forwardButton: {
    width: '30px',
    height: '30px',
    backgroundColor: 'black'
  },
  backwardButton: {
    width: '30px',
    height: '30px',
    backgroundColor: 'black'
  }
};

var Carousel = function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    console.log('HEIGHT', _this.props.height);
    console.log('WIDTH', _this.props.width);
    console.log('MAX', _this.props.max);
    _this.forward = _this.forward.bind(_this);
    _this.backward = _this.backward.bind(_this);

    _this.state = {
      multipleContainerBundle: Object.assign({ width: _this.props.children.length * 100 + '%', position: 'relative' })
    };

    _this.carouselBundle = {};
    _this.containerBundle = {};

    return _this;
  }

  _createClass(Carousel, [{
    key: 'forward',
    value: function forward() {
      var _this2 = this;

      console.log('forward');
      console.log('WIDTH', this.props.width);
      console.log('LENGTH', this.props.children.length);
      this.setState(function (prevState) {
        return { multipleContainerBundle: Object.assign(prevState.multipleContainerBundle, { left: '-' + _this2.props.width }) };
      });
    }
  }, {
    key: 'backward',
    value: function backward() {
      console.log('backward');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (this.props.max === 'yes') {
        this.carouselBundle = Object.assign(styles.carousel, { width: '100%' }, { height: '100%' });
        this.containerBundle = Object.assign(styles.container, { width: 100 / this.props.children.length + '%' });
      } else {
        this.containerBundle = Object.assign(styles.container, { width: this.props.width }, { height: this.props.height });
        this.carouselBundle = Object.assign(styles.carousel);
      }
      console.log('STATE', this.state);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { style: styles.backwardButton, onClick: this.backward }),
        _react2.default.createElement(
          'div',
          { style: this.carouselBundle, className: 'carouselBundle' },
          _react2.default.createElement(
            'div',
            { style: this.state.multipleContainerBundle, className: 'multipleContainerBundles' },
            this.props.children.map(function (container) {
              return _react2.default.createElement(
                'div',
                { style: _this3.containerBundle, className: 'containerBundle' },
                container
              );
            })
          )
        ),
        _react2.default.createElement('div', { style: styles.forwardButton, onClick: this.forward })
      );
    }
  }]);

  return Carousel;
}(_react2.default.Component);

exports.default = Carousel;
