"use strict";

class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this.nombre;
  }

  set nombre(_nuevoNombre) {
    this._nombre = _nuevoNombre;
  }

  calcularImpuesto() {
    return (
      ((this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21)
    );
  }
}

class Impuestos {
  constructor(monto_bruto_anual, deducciones) {
    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }

  get monto_bruto_anual() {
    return this._monto_bruto_anual;
  }

  set monto_bruto_anual(_newMonto_Bruto) {
    this._monto_bruto_anual = _newMonto_Bruto;
  }

  get deducciones() {
    return this._deducciones;
  }

  set deducciones(_newDeducciones) {
    this._deducciones = _newDeducciones;
  }
}

const impuestosPedro = new Impuestos(23443, 343);
const clientePedro = new Cliente("Pedro", impuestosPedro);
const impuestosPablo = new Impuestos(2115456, 3652);
const clientePablo = new Cliente("Pablo", impuestosPablo);

const calculoPedro = clientePedro.calcularImpuesto();
const calculoPablo = clientePablo.calcularImpuesto();

console.log({ calculoPedro, calculoPablo });
