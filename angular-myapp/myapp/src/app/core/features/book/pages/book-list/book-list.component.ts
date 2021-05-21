import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Book } from 'src/app/core/models/book.model';
import { HttpBookService } from 'src/app/core/service/http-book.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  destroy$: Subject<boolean> = new Subject();
  constructor(private httpBookService:HttpBookService,private router: Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadBooks();
  }
  ngOnDestroy() {
    this.destroy$.next(true);
  }
  loadBooks(){
    this.httpBookService.getAll()
    .pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      response=>{
      this.books = response;
      console.log(this.books)
      }
    )

  }

  onDeleteClick(book: Book) {
     this.deleteSelectedBook(book)

  }

  deleteSelectedBook(book: Book) {
    this.httpBookService.delete(book).subscribe(response => {
      this.loadBooks();
      alert("Book is deleted!")
    })
  }



}
