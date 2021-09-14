import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
