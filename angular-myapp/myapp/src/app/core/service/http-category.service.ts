import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class HttpCategoryService {

  constructor(private httpClient:HttpClient) { }
  getAll() {
    return this.httpClient.get<Category[]>(`${environment.baseHttpURL}`)
  }

  delete(category:Category):Observable<Category>{
    return this.httpClient.delete<Category>(`${environment.baseHttpURL}/${category.id}`);
  }
  post(category:Category):Observable<Category>{
    return this.httpClient.post<Category>(`${environment.baseHttpURL}`,category);
  }
  findById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${environment.baseHttpURL}/${id}`);
  }
  edit(category:Category):Observable<Category>{
    return this.httpClient.put<Category>(`${environment.baseHttpURL}`,category);
  }

}
