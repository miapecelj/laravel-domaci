import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { BookListComponent } from './pages/book-list/book-list.component';

const routes: Routes = [
  {path:'book-list', component:BookListComponent},
 {path:'book-form/:id', component:BookFormComponent, data: {edit: true}},
  // {path:'exam-details/:id', component:ExamDetailsComponent},
 {path:'book-form', component:BookFormComponent, data: {edit: false}},
  {path:'', redirectTo:'book-list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
