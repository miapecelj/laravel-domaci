import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpBookService {
  controlPrefix="book"

  constructor(private httpClient:HttpClient) { }
  getAll() {
    return this.httpClient.get<Book[]>(`${environment.baseHttpURL}/${this.controlPrefix}`)
  }

  delete(book:Book):Observable<Book>{
    return this.httpClient.delete<Book>(`${environment.baseHttpURL}/${this.controlPrefix}/${book.id}`);
  }
  post(book:Book):Observable<Book>{
    console.log("service "+book.category.name)
    return this.httpClient.post<Book>(`${environment.baseHttpURL}/${this.controlPrefix}`,book);
  }
  findById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${environment.baseHttpURL}/${this.controlPrefix}/${id}`);
  }
  edit(book:Book):Observable<Book>{
    return this.httpClient.put<Book>(`${environment.baseHttpURL}/${this.controlPrefix}/${book.id}`,book);
  }

}
