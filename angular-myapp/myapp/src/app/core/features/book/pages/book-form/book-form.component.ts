import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Book } from 'src/app/core/models/book.model';
import { Category } from 'src/app/core/models/category.model';
import { HttpBookService } from 'src/app/core/service/http-book.service';
import { HttpCategoryService } from 'src/app/core/service/http-category.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm:FormGroup;
  addedBook:Book;
  edit:false;
  destroy$: Subject<boolean> = new Subject();
  categories:Category[];

  constructor(private httpBookService:HttpBookService, private httpCategoryService:HttpCategoryService,private fb: FormBuilder,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.prepareData();
  }
  ngOnDestroy() {
    this.destroy$.next(true);
  }
  prepareData() {
    this.httpCategoryService.getAll().subscribe(response=>{
      this.categories=response;
      console.log(this.categories);
      this.edit = this.route.snapshot.data.edit;
    if (this.edit) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.loadBook(id);
    } else {
      this.buildForm();
    }
    }
    );

  }
  buildForm(book?:Book){
    this.bookForm = this.fb.group(
      {
        name:[book? book.name:null],
        writer:[book? book.writer:null],
        category_id:[book? book.category_id:null],
        id:[+this.route.snapshot.paramMap.get('id')],
        url:["www.url"],
        category:[this.categories.find(category=>category.id===book?.category_id)]
      }
    );
  }
  onSubmit() {
    this.saveBook()
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(
      book => {
        this.addedBook=book;
        this.router.navigate(['/book/book-list']);

      }

    );
  }
  saveBook() {
    if (this.edit) {
      return this.httpBookService.edit(this.bookForm.value);
    } else {
      this.bookForm.value.category=this.categories.find(category=>category.id===this.bookForm.value.category_id);
      console.log(this.bookForm.value);
      return this.httpBookService.post(this.bookForm.value);
    }
  }

  loadBook(id:number){
    this.httpBookService.findById(id)
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe( book => {
      console.log(book);
      this.buildForm(book);
    });
  }



}
