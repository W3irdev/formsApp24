import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { LoginResponse, User } from '../../interfaces/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  private baseURL = 'http://localhost:3100/auth';
  private _user!:User;

  get user():User{
    return {...this._user}
  }

  login(email:string, password:string):Observable<LoginResponse | string | boolean>{
    return this.http.post<LoginResponse>(`${this.baseURL}/login`, {email, password})
    .pipe(
      tap(resp => this._user=resp.user),
      map( resp => true),
      catchError( erro => of(erro.error.msg))
    )
  }
}
