import { CursoService } from './../../components/curso/curso.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-curso-crud',
  templateUrl: './curso-crud.component.html',
  styleUrls: ['./curso-crud.component.css']
})
export class CursoCrudComponent {

  constructor(private router: Router){}


  navigateToCourseCreate(): void {
    this.router.navigate(['/cursos/create'])
  }
}
