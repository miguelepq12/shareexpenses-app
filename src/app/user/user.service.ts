import { Injectable } from '@angular/core';
import {Cliente} from '../../../../clientes-app/src/app/clientes/cliente';
import {User} from './user';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {VariablesApp} from '../helpers/variables-app';

@Injectable()
export class UserService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient,
              private router: Router, ) {
  }

  signUp(user: User): Observable<any> {
    return this.http.post<any>(VariablesApp.URL_API + 'registration', user, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        if (e.status === 400 || e.status === 500) {
          return throwError(e);
        }
      })
    );
  }
}
