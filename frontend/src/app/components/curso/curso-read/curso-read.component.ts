import { CursoService } from './../curso.service';
import { Curso } from './../curso-create/curso.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-curso-read',
  templateUrl: './curso-read.component.html',
  styleUrls: ['./curso-read.component.css']
})
export class CursoReadComponent implements OnInit{

  cursos!: Curso[];
  displayedColumns = ['id', 'nome', 'instrutor', 'local', 'cargaHoraria', 'dataInicio']

  constructor(private cursoService: CursoService){}

  ngOnInit(): void {
    this.cursoService.read().subscribe(cursos => {
      this.cursos = cursos;
      console.log(cursos);
    })
  }
}
