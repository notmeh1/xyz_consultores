"use strict";

class Cliente {
    constructor(nombre, impuesto) {
        this.nombre = nombre
        this.impuesto = impuesto
    }
}
    Object.defineProperty(this, "nombre", {
        get: function () {
        return nombre;
        },
        set: function (newNombre) {
        nombre = newNombre;
        },
    });

class Impuestos {
    constructor(monto_bruto_anual, deducciones) {
        this.monto_bruto_anual = monto_bruto_anual
        this.deducciones = deducciones
    }
    calcularImpuesto() {
        return ((this.monto_bruto_anual - this.deducciones) * 0.21)
    }
}

const impuestosDeLuis = new Impuestos(100, 5);
const clienteLuis = new Cliente("Luis", impuestosDeLuis);

const impuestosDeAngela = new Impuestos(300, 15);
const clienteAngela = new Cliente("Angela", impuestosDeAngela);

const calculoDeLuis = clienteLuis.calcularImpuesto();
const calculoDeAngela = clienteAngela.calcularImpuesto();

console.log({ calculoDeLuis, calculoDeAngela });



