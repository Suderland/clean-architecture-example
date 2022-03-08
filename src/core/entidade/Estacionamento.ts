export default class Estacionamento {
  cod: string;
  horaAbre: number;
  capacidade: number;
  horaFecha: number;
  espacosOcupados: number;
  
  constructor(cod, capacidade, horaAbre, horaFecha, espacosOcupados){
    this.cod = cod;
    this.capacidade = capacidade;
    this.horaAbre = horaAbre;
    this.horaFecha = horaFecha;
    this.espacosOcupados= espacosOcupados;
  }

  isOpen (data: Date) {
    const hora = data.getHours();
    return (hora >= this.horaAbre && hora <= this.horaFecha); 
  }
  isFull (){
    return this.capacidade === this.espacosOcupados;
  }
}