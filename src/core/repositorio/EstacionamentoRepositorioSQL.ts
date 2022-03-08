import Estacionamento from "../entidade/Estacionamento";
import EstacionamentoRepositorio from "./EstacionamentoRepositorio";
import db from "../../infra/database/database";
import EstacionamentoAdapter from "../../adapter/EstacionamentoAdapter";

export default class EstacionamentoRepositorioSQL implements EstacionamentoRepositorio {
  
  async getEstacionamento(cod: string): Promise<Estacionamento> {
    const estacionamentoData = await db.oneOrNone("select *, (select count(*) from carro_estacionado ce where ce.cod = e.cod)::int as espaco_ocupado from Estacionamento e where e.cod = $1", [cod]);
    return EstacionamentoAdapter.create(estacionamentoData.cod, estacionamentoData.capacidade, estacionamentoData.hora_abre, estacionamentoData.hora_fecha, estacionamentoData.espaco_ocupado)
  }
  async saveCarroEstacionado(cod: string, placa: string, data: Date): Promise<void> {
    await db.none("insert into carro_estacionado (cod, placa, data) values ($1, $2, $3)", [cod, placa, data]);
  }
  
}