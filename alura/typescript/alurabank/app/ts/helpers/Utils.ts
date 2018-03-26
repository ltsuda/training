import { Printable } from '../models/Printable';

export function imprime(...objetos: Printable[]) {
    objetos.forEach(objeto => objeto.paraTexto());
}