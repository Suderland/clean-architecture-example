import Estacionamento from "../core/entidade/Estacionamento";

export default class EstacionamentoAdapter{
  static create (cod: string, capacidade: number, horaAbre: number, horaFecha: number, espacosOcupados: number) {
    return new Estacionamento(cod, capacidade, horaAbre, horaFecha, espacosOcupados)
  }
}