import { Component, OnInit } from '@angular/core';
import { Sala } from '../sala';
import { ActivatedRoute,Router } from '@angular/router';
import { SalaService } from '../sala.service';

@Component({
  selector: 'app-atualizar-sala',
  templateUrl: './atualizar-sala.component.html',
  styleUrls: ['./atualizar-sala.component.css']
})
export class AtualizarSalaComponent implements OnInit {

  id: number;
  sala: Sala;
  submitted = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private salaService: SalaService) { }

  ngOnInit(): void {
    this.sala = new Sala();
    this.id = this.route.snapshot.params['id'];
    this.salaService.getSala(this.id)
      .subscribe(data => {
          console.log(data)
          this.sala = data;
      },error => console.log(error));
  }

  updateSala(){
    this.salaService.updateSala(this.id,this.sala)
      .subscribe(data => console.log(data), error => console.log(error));
    this.sala = new Sala();
    this.gotoList();
  }

  onSubmit() {
    this.updateSala();
  }

  gotoList() {
    this.router.navigate(['/salas']);
  }

}
