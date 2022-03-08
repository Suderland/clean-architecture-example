import CarroEstacionado from "../entidade/CarroEstacionado";
import EstacionamentoRepositorio from "../repositorio/EstacionamentoRepositorio";

export default class EntrarEstacionamento {
  estacionamentoRepositorio: EstacionamentoRepositorio;

  constructor(estacionamentoRepositorio: EstacionamentoRepositorio){
    this.estacionamentoRepositorio = estacionamentoRepositorio;
  }
  
  async execute(cod: string, placa: string, data: Date){
    const estacionamento = await this.estacionamentoRepositorio.getEstacionamento(cod);
    const carroEstacionado = new CarroEstacionado(cod, placa, data);
    if (!estacionamento.isOpen(carroEstacionado.data)) throw new Error("O estacionamento está fechado");
    if (estacionamento.isFull()) throw new Error("O estacionamento está lotado");
    await this.estacionamentoRepositorio.saveCarroEstacionado(carroEstacionado.cod, carroEstacionado.placa, carroEstacionado.data);
    return estacionamento;
  }
}