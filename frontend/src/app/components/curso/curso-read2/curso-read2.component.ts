import { Curso } from './../curso-create/curso.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CursoRead2DataSource } from './curso-read2-datasource';

@Component({
  selector: 'app-curso-read2',
  templateUrl: './curso-read2.component.html',
  styleUrls: ['./curso-read2.component.css']
})
export class CursoRead2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Curso>;
  dataSource: CursoRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nome', 'instrutor', 'local', 'cargaHoraria', 'dataInicio'];

  constructor() {
    this.dataSource = new CursoRead2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
