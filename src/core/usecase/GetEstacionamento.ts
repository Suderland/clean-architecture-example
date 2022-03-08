import EstacionamentoRepositorio from "../repositorio/EstacionamentoRepositorio";

export default class getEstacionamento{
  estacionamentoRepositorio: EstacionamentoRepositorio;

  constructor(estacionamentoRepositorio: EstacionamentoRepositorio){
    this.estacionamentoRepositorio = estacionamentoRepositorio;
  }

  execute(cod : string){
    return this.estacionamentoRepositorio.getEstacionamento(cod);
  }

}