import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from './curso.model';


@Component({
  selector: 'app-curso-create',
  templateUrl: './curso-create.component.html',
  styleUrls: ['./curso-create.component.css']
})
export class CursoCreateComponent {

  curso: Curso = {
    nome: '',
    instrutor: '',
    local: '',
    cargaHoraria: 0,
    dataInicio: ''
  }

  constructor(private cursoService: CursoService, private router: Router){}

  ngOnInit(): void{
  }

  createCurso(): void{
    this.cursoService.create(this.curso).subscribe(() =>
    {
      this.cursoService.showMessage("Curso criado!");
      this.router.navigate(['/cursos']);
    })
  }

  cancel(): void{
    this.router.navigate(['/cursos']);
  }
}
