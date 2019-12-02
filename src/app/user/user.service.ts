import { Injectable } from '@angular/core';
import {User} from './user';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {catchError, map} from 'rxjs/operators';
import {VariablesApp} from '../helpers/variables-app';

@Injectable()
export class UserService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private URL_USER = VariablesApp.URL_API + 'user/';
  public URL_UPLOAD = this.URL_USER + 'uploads/';


  constructor(private http: HttpClient,
              private router: Router) {
  }

  signUp(user: User): Observable<any> {
    return this.http.post<any>(VariablesApp.URL_API + 'registration', user,
      {headers: this.httpHeaders}).pipe(
      catchError(e => {
        if (e.status === 400 || e.status === 500) {
          return throwError(e);
        }
      })
    );
  }

  getProfile(): Observable<User> {
    return this.http.get<any>(this.URL_USER + 'profile').pipe(
      map(response => {
        return response.user as User;
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  changeImage(imgBase64: string): Observable<User> {
    return this.http.put<any>(this.URL_USER + 'img', {profileImg: imgBase64},
      {headers: this.httpHeaders}).pipe(
      map(response => {
        return response.user as User;
      }),
      catchError(e => {
        return throwError(e);
      })
    );
  }

  changePass(newPass: string): Observable<any> {
    return this.http.put<any>(this.URL_USER + 'pass', {pass: newPass},
      {headers: this.httpHeaders}).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }
}
