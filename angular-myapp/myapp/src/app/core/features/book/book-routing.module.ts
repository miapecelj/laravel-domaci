import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';

const routes: Routes = [
  {path:'book-list', component:BookListComponent},
  // {path:'exam-form/:id', component:ExamFormComponent, data: {edit: true}},
  // {path:'exam-details/:id', component:ExamDetailsComponent},
  // {path:'exam-form', component:ExamFormComponent, data: {edit: false}},
  {path:'', redirectTo:'book-list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
