import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url:string = "http://localhost:8080/api/";
  public $user: Subject<User> = new Subject<User>();
  public user: User;
  public users:User[];

  constructor(private http: HttpClient) { }

  login(email:any, password:any):Observable<any>{
    return this.http.get(this.url+"?login="+email+"&password="+password).pipe(
      catchError((resp: HttpErrorResponse)=>
        throwError(`Error al acceder, ${resp.message}`))
    );
  }

  getUsuarios():Observable<any>{
    return this.http.get(this.url+"?getUsuarios=1");
  }

  setUser(user: User): void {
    this.$user.next(user);
    this.user = user;
  }

  setUsers(){
    this.getUsuarios().subscribe(res=>{
      this.users = res;
    });
  }

  getUsers(){
    return this.users;
  }

  getUser(): Observable<User> {
    return this.$user;
  }

  insertUser(user:User): Observable<any>{
    return this.http.post(this.url+"?insertar=1",user);
  }

  checkUserExist() {
    return this.user;
  }
}
