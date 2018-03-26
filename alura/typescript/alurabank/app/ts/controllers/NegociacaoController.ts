import { NegociacoesView, MensagemView } from "../views/index";
import { Negociacoes, Negociacao, NegociacaoParcial } from "../models/index";
import { domInject, throttle } from "../helpers/decorators/index";
import { NegociacaoService } from "../services/index";
import { imprime } from "../helpers/index";

let timer = 0;

export class NegociacaoController {
  @domInject("#data") private _inputData: JQuery;

  @domInject("#quantidade") private _inputQuantidade: JQuery;

  @domInject("#valor") private _inputValor: JQuery;

  private _negociacoes: Negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView("#negociacoesView");
  private _mensagemView = new MensagemView("#mensagemView");
  private _service = new NegociacaoService();

  constructor() {
    this._negociacoesView.update(this._negociacoes);
  }

  @throttle()
  adiciona(): void {
    let data = new Date(this._inputData.val().replace(/-/g, ","));
    if (!this._eDiaUtil(data)) {
      this._mensagemView.update(
        "Somente negociações em dias úteis, por favor!"
      );
      return;
    }

    const negociacao = new Negociacao(
      new Date(data),
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputValor.val())
    );

    this._negociacoes.adiciona(negociacao);
    imprime(negociacao, this._negociacoes);
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update("Negociação adicionada com sucesso!");
  }

  private _eDiaUtil(data: Date) {
    return data.getDay() != Semana.Sabado && data.getDay() != Semana.Domingo;
  }

  @throttle(500)
  async importaDados() {
    try {
      const negociacoesParaImportar = await this._service.obterNegociacoes(
        res => {
          if (res.ok) {
            return res;
          } else {
            throw new Error(res.statusText);
          }
        }
      );

      const negociacoesImportadas = this._negociacoes.paraArray();

      negociacoesParaImportar
        .filter(
          negociacao =>
            !negociacoesImportadas.some(importadas =>
              negociacao.isEqual(importadas)
            )
        )
        .forEach(negociacao => this._negociacoes.adiciona(negociacao));
      this._negociacoesView.update(this._negociacoes);
    } catch (err) {
      this._mensagemView.update(err.message);
    }
  }
}

enum Semana {
  Domingo,
  Segunda,
  Terça,
  Quarta,
  Quinta,
  Sexta,
  Sabado
}
