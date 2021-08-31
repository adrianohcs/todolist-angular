import {Prioridades} from "./Prioridade";

export interface Tarefa {
    feita: boolean;
    prioridade?:Prioridades;
    texto:string;
}