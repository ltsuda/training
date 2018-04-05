import {Negociacao} from '../models/Negociacao';

export class NegociacaoDao {

    constructor(connection) {
        this._connection = connection;
        this._store = 'negociacoes';
    }

    adiciona(negociacao) {
        return new Promise((resolve, reject) => {

            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(negociacao);

            request.onsuccess = evento => {
                resolve();
            };

            request.onerror = evento => {
                console.log(evento.target.error);
                reject('Não foi possível adicionar a negociação');
            };
        });
    }

    lista() {
        return new Promise((resolve, reject) => {

            let cursor = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .openCursor();

            let negociacoes = [];

            cursor.onsuccess = evento => {
                let atual = evento.target.result;

                if (atual) {
                    let dado = atual.value;
                    negociacoes.push(new Negociacao(dado._data, dado._quantidade, dado._valor));
                    atual.continue();
                } else {
                    resolve(negociacoes);
                }
            };

            cursor.onerror = evento => {
                console.log(evento.target.error);
                reject('Não foi possível listar as negociações');
            };
        });
    }

    apaga() {
        return new Promise((resolve, reject) => {

            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .clear();

            request.onsuccess = evento => {
                resolve('Negociações removidas com sucesso');
            };

            request.onerror = evento => {
                console.log(evento.target.error);
                reject('Não foi possível remover as negociações');
            };
        });
    }
}