"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// calculator.js
var Calculator = /*#__PURE__*/function () {
  function Calculator() {
    _classCallCheck(this, Calculator);
  }

  _createClass(Calculator, [{
    key: "add",
    value: function add(a, b) {
      return a + b;
    }
  }, {
    key: "subtract",
    value: function subtract(a, b) {
      return a - b;
    }
  }]);

  return Calculator;
}();

exports["default"] = Calculator;