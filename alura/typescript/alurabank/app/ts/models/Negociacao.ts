import { Objeto } from './Objeto';

export class Negociacao implements Objeto<Negociacao> {
  constructor(
    readonly data: Date,
    readonly quantidade: number,
    readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  paraTexto(): void {
    console.log("---------LOG---------");
    console.log(`Data: ${this.data}
      Quantidade: ${this.quantidade},
      Valor: ${this.valor},
      Volume: ${this.volume}
      
    `);
  }

  isEqual(negociacao: Negociacao): boolean {
    return this.data.getDay() == negociacao.data.getDay()
      && this.data.getMonth() == negociacao.data.getMonth()
      && this.data.getFullYear() == negociacao.data.getFullYear();
  }
}
