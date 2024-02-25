import Cliente from "./cliente.js";
import CalculadoraImpuestos from "./impuestos.js";

const cliente1 = new Cliente("Cliente1", 100000, 5000);
const cliente2 = new Cliente("Cliente2", 150000, 8000);

console.log(
  `${
    cliente1.nombre
  }: Impuesto Anual - ${CalculadoraImpuestos.calcularImpuestoAnual(cliente1)}`
);
console.log(
  `${
    cliente2.nombre
  }: Impuesto Anual - ${CalculadoraImpuestos.calcularImpuestoAnual(cliente2)}`
);
