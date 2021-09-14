import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheSalaComponent } from './detalhe-sala/detalhe-sala.component';
import { CriarSalaComponent } from './criar-sala/criar-sala.component';
import { ListarSalaComponent } from './listar-sala/listar-sala.component';
import { AtualizarSalaComponent } from './atualizar-sala/atualizar-sala.component';

const routes: Routes = [
  {path: '', redirectTo: 'salas', pathMatch: 'full' },
  {path:'salas', component: ListarSalaComponent},
  {path:'add', component: CriarSalaComponent},
  {path:'update/:id', component: AtualizarSalaComponent},
  {path:'detalhe/:id', component: DetalheSalaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
