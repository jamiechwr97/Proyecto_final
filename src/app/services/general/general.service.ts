import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lugar } from 'src/app/interfaces/lugar';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private url:string = "http://localhost:8080/api/";

  lugares: Lugar[] = [];

  constructor(private http: HttpClient) { }

  getAllLugares(): Observable<any>  {
    return this.http.get(this.url+"?todosLugares=1");
  }

  getAllCategories(): Observable<any> {
    return this.http.get(this.url+"?todasCategorias=1");
  }
}
