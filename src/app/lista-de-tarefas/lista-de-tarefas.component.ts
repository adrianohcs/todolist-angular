import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../models/Tarefa';
import { Prioridades } from '../models/Prioridade';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {

  tarefas: Tarefa[] = [
    {
      texto: "Lavar o carro",
      prioridade: Prioridades.baixa,
      feita: false
    },
    {
      texto: "Comprar comida p/ o cachorro",
      prioridade: Prioridades.alta,
      feita: true
    },
    {
      texto: "Comprar comida p/ o gato",
      prioridade: Prioridades.alta,
      feita: true
    },
    {
      texto: "Jogar videogame",
      prioridade: Prioridades.baixa,
      feita: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
