import { Negociacao, Objeto } from './index';

export class Negociacoes implements Objeto<Negociacoes> {
  private _negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao): void {
    this._negociacoes.push(negociacao);
  }

  paraArray(): Negociacao[] {
    return ([] as Negociacao[]).concat(this._negociacoes);
  }

  paraTexto(): void {
    console.log('---------LOG---------');
    console.log(JSON.stringify(this._negociacoes));
  };

  isEqual(negociacoes: Negociacoes): boolean {
    return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray());
  }
}
