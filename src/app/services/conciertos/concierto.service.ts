import { Injectable } from '@angular/core';
import { Concierto } from 'src/app/interfaces/concierto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConciertoService {

  private url:string = "http://localhost:8080/api/";

  conciertos: Concierto[] = [];

  conciertosOrden: Concierto[] = [];

  constructor(private http: HttpClient) { }

  getAll():Observable<any> {
    return this.http.get(this.url+"?todosConciertos=1");
  }

  getTop5(): Observable<any> {
    return this.http.get(this.url+"?top5=1");
  }

  getAllFiltered(id: any):Observable<any>  {
    return this.http.get(this.url+"?conciertosFiltrados="+id);
  }

  getOneConcert(id: any):Observable<any>  {
    return this.http.get(this.url+"?unicoConcierto="+id);
  }

  getAllOrdenados() {
    this.conciertosOrden = this.conciertos.slice().sort(function(a, b){
      return new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
    });

    return this.conciertosOrden;
  }

  anadirConcierto(c: Concierto):Observable<any> {
    return this.http.post(this.url+"?addConcierto=1", c);
  }

  elimConcierto(i: any):Observable<any> {
    console.log(i);
    return this.http.delete(this.url+"?elimConcierto="+i);
  }
}
