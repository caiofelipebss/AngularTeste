import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import {Curso} from './curso-create/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  baseUrl = "http://localhost:3001/cursos";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg,'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(this.baseUrl, curso)
  }

  read(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.baseUrl);
  }

}
