import EstacionamentoRepositorioSQL from "../core/repositorio/EstacionamentoRepositorioSQL";
import GetEstacionamento from "../core/usecase/GetEstacionamento";

export default class EstacionamentoController {
  static async getEstacionamento (params, body) {
    const estacionamentoRepositorioSQL = new EstacionamentoRepositorioSQL();
    const getEstacionamento = new GetEstacionamento(estacionamentoRepositorioSQL);
    const estacionamento = await getEstacionamento.execute(params.cod);
    return estacionamento;
  }
}