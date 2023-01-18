import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CursoCrudComponent } from './views/curso-crud/curso-crud.component';
import { CursoCreateComponent } from './components/curso/curso-create/curso-create.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "cursos",
  component: CursoCrudComponent
},
{
  path: "cursos/create",
  component: CursoCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
