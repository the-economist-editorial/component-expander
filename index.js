"use strict";

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var Expander = (function (_React$Component) {
  function Expander() {
    _classCallCheck(this, Expander);

    _React$Component.call(this);
    this.state = { open: false };
  }

  _inherits(Expander, _React$Component);

  Expander.prototype.toggleExpanded = function toggleExpanded() {
    if (this.state.open) {
      this.close();
    } else {
      this.open();
    }
  };

  Expander.prototype.close = function close() {
    this.setState({ open: false });
    _react2["default"].findDOMNode(this.refs.body).scrollTop = 0;
    if (this.props.onClose) {
      this.props.onClose(this);
    }
  };

  Expander.prototype.open = function open() {
    this.setState({ open: true });
    if (this.props.onOpen) {
      this.props.onOpen(this);
    }
  };

  Expander.prototype.render = function render() {
    return _react2["default"].createElement(
      "div",
      { className: "Expander", "data-open": this.state.open },
      _react2["default"].createElement(
        "header",
        { className: "Expander--Header" },
        this.props.header
      ),
      _react2["default"].createElement(
        "div",
        { className: "Expander--Body", ref: "body" },
        this.props.children
      ),
      _react2["default"].createElement(
        "footer",
        { className: "Expander--Footer", onClick: this.toggleExpanded.bind(this) },
        this.props.footer
      )
    );
  };

  _createClass(Expander, null, [{
    key: "propTypes",
    get: function get() {
      return {
        header: _react2["default"].PropTypes.node,
        children: _react2["default"].PropTypes.node.isRequired,
        footer: _react2["default"].PropTypes.node,
        onClose: _react2["default"].PropTypes.func,
        onOpen: _react2["default"].PropTypes.func
      };
    }
  }]);

  return Expander;
})(_react2["default"].Component);

exports["default"] = Expander;
module.exports = exports["default"];

