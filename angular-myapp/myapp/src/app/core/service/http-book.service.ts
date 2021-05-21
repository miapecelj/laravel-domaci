import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpBookService {

  constructor(private httpClient:HttpClient) { }
  getAll() {
    return this.httpClient.get<Book[]>(`${environment.baseHttpURL}`)
  }

  delete(book:Book):Observable<Book>{
    return this.httpClient.delete<Book>(`${environment.baseHttpURL}/${book.id}`);
  }
  post(book:Book):Observable<Book>{
    return this.httpClient.post<Book>(`${environment.baseHttpURL}`,book);
  }
  findById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${environment.baseHttpURL}/${id}`);
  }
  edit(book:Book):Observable<Book>{
    return this.httpClient.put<Book>(`${environment.baseHttpURL}`,book);
  }

}
