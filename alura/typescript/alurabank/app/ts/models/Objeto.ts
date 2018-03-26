import { Printable } from './Printable';
import { Equatable } from './Equatable';

export interface Objeto<T> extends Printable, Equatable<T> {
    
}