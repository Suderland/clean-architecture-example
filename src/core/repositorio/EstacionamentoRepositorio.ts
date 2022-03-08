import Estacionamento from "../entidade/Estacionamento";

export default interface EstacionamentoRepositorio {
  getEstacionamento(cod: string) : Promise<Estacionamento>;
  saveCarroEstacionado(cod: string, placa: string, data: Date) : void;
}