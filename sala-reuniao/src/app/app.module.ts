import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarSalaComponent } from './criar-sala/criar-sala.component';
import { DetalheSalaComponent } from './detalhe-sala/detalhe-sala.component';
import { ListarSalaComponent } from './listar-sala/listar-sala.component';
import { AtualizarSalaComponent } from './atualizar-sala/atualizar-sala.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarSalaComponent,
    DetalheSalaComponent,
    ListarSalaComponent,
    AtualizarSalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
