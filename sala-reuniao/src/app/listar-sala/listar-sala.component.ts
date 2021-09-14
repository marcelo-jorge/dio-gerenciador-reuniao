import { DetalheSalaComponent} from '../detalhe-sala/detalhe-sala.component';
import { Observable} from 'rxjs';
import { SalaService } from './../sala.service';
import { Sala } from './../sala';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-sala',
  templateUrl: './listar-sala.component.html',
  styleUrls: ['./listar-sala.component.css']
})
export class ListarSalaComponent implements OnInit {

  salas: Observable<Sala[]>;

  constructor(private salaService: SalaService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.salas = this.salaService.getListarSala();
  }

  deleteSala(id: number) {
    this.salaService.deleteSala(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  detalheSala(id: number){
    this.router.navigate(['detalhes', id]);
  }

  updateSala(id: number){
    this.router.navigate(['update', id]);
  }

}
