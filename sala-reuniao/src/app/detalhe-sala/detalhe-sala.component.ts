import { SalaService } from './../sala.service';
import { Component, OnInit } from '@angular/core';
import { Sala } from '../sala';
import { SalaService } from '../sala.service';
import { ListarSalaComponent } from '../listar-sala/listar-sala.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-sala',
  templateUrl: './detalhe-sala.component.html',
  styleUrls: ['./detalhe-sala.component.css']
})
export class DetalheSalaComponent implements OnInit {

  id: number;
  sala: Sala;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private salaService: SalaService ) { }

  ngOnInit(): void {
    this.sala = new Sala();

    this.id = this.route.snapshot.params['id'];

    this.salaService.getSala(this.id)
      .subscribe(data => {
        console.log(data)
        this.sala = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['salas']);
  }

}
