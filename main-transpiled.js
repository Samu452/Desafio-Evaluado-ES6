"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuesto = _interopRequireDefault(require("./impuesto.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var cliente1 = new _cliente["default"]("Cliente1", 100000, 5000);
var cliente2 = new _cliente["default"]("Cliente2", 150000, 8000);
console.log("".concat(cliente1.nombre, ": Impuesto Anual - ").concat(_impuesto["default"].calcularImpuestoAnual(cliente1)));
console.log("".concat(cliente2.nombre, ": Impuesto Anual - ").concat(_impuesto["default"].calcularImpuestoAnual(cliente2)));
