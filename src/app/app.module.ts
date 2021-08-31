import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { ListaDeTarefasComponent } from './lista-de-tarefas/lista-de-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefaComponent,
    ListaDeTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
