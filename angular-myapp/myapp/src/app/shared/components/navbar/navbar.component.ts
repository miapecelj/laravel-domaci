import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Category } from 'src/app/core/models/category.model';
import { HttpCategoryService } from 'src/app/core/service/http-category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories:Category[];
  destroy$: Subject<boolean> = new Subject();

  constructor(private router: Router,private httpCategoryService:HttpCategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }
  ngOnDestroy() {
    this.destroy$.next(true);
  }
  loadCategories(){
    this.httpCategoryService.getAll()
    .pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      response=>{
      this.categories = response;
      console.log(this.categories)
      }
    )

  }

}
