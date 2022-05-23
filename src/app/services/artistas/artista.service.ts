import { Injectable } from '@angular/core';
import { Artista } from 'src/app/interfaces/artista';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  private url:string = "http://localhost:8080/api/";

  artistas: Artista[] = []

  constructor(private http: HttpClient) { }

  getAll():Observable<any> {
    return this.http.get(this.url+"?getAllArtistas=1");
  }

  getTop5():Observable<any> {
    return this.http.get(this.url+"?top5artistas=1");
  }

  getAllCategory(id: any):Observable<any>  {
    return this.http.get(this.url+"?artistasCategorizados="+id);
  }

  getOneArtist(id: number):Observable<any> {
    return this.http.get(this.url+"?unicoArtista="+id);
  }

  getArtistsConcert(idConc: number):Observable<any> {
    return this.http.get(this.url+"?getArtistsConcert="+idConc);
  }

  anadirArtista(a: Artista):Observable<any>  {
    return this.http.post(this.url+"?addArtista=1", a);
  }

  elimArtista(i: any):Observable<any> {
    return this.http.delete(this.url+"?elimArtista="+i);
  }
}
