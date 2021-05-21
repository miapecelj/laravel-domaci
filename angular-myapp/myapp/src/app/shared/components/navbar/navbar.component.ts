import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BookListComponent } from 'src/app/core/features/book/pages/book-list/book-list.component';
import { Category } from 'src/app/core/models/category.model';
import { HttpCategoryService } from 'src/app/core/service/http-category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit(): void {

  }



}
