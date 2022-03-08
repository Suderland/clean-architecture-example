export default class CarroEstacionado {
  cod: string;
  placa: string;
  data: Date;

  constructor(cod: string, placa: string, data: Date) {
    if (!/[A-Z]{3}-[0-9]{4}/.test(placa)) throw new Error("Placa Inválida");
    this.cod = cod;
    this.placa = placa;
    this.data = data;
  }
}