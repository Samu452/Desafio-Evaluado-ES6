export default class Cliente {
  constructor(nombre, montoBrutoAnual, deduccionesAnuales) {
    this.nombre = nombre;
    this.montoBrutoAnual = montoBrutoAnual;
    this.deduccionesAnuales = deduccionesAnuales;
  }

  get nombreCliente() {
    return this.nombre;
  }

  set nombreCliente(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  calcularImpuesto() {
    return (this.montoBrutoAnual - this.deduccionesAnuales) * 0.21;
  }
}
