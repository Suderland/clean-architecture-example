import EstacionamentoAdapter from "../../adapter/EstacionamentoAdapter";
import Estacionamento from "../../core/entidade/Estacionamento";
import EstacionamentoRepositorio from "../../core/repositorio/EstacionamentoRepositorio";

export default class EstacionamentoRepositorioMemoria implements EstacionamentoRepositorio {
  
  estacionamentos=[
    {
      cod: "shopping", 
      capacidade: 5, 
      hora_abre: 8, 
      hora_fecha: 22, 
      espacosOcupados: 0
    }
  ]; 
  carroEstacionado=[];
  
  getEstacionamento(cod: string): Promise<Estacionamento> {
    const estacionamentoData = this.estacionamentos.find(estacionamento => estacionamento.cod === cod);
    const espacosOcupados = this.carroEstacionado.length;
    const estacionamento = EstacionamentoAdapter.create(estacionamentoData.cod, estacionamentoData.capacidade, estacionamentoData.hora_abre, estacionamentoData.hora_fecha, espacosOcupados)
    return Promise.resolve(estacionamento);
  }
  
  saveCarroEstacionado(cod: string, placa: string, data: Date): void {
    this.carroEstacionado.push({cod, placa, data});
  }
}