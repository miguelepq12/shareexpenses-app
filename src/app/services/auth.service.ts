import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {User} from '../user/user';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {VariablesApp} from '../helpers/variables-app';
import {UserService} from "../user/user.service";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private helper;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.helper = new JwtHelperService();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, pass: string) {
    return this.http.post<any>(`${VariablesApp.URL_API}login`, { username, pass })
      .pipe(
        map(result => {
        if (result.user && result.token) {
          this.saveUserToken(result.user, result.token);
        }
        return result.user;
      }),
        catchError(e => {
          return throwError(e);
        })
      );

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isJwtValid(): boolean {
    if (this.currentUserSubject.value) {
      return !this.helper.isTokenExpired(this.currentUserSubject.value.token);
    } else {
      return false;
    }
  }

  saveUserToken(user: User, token: string) {
    user.token = token;
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }


}
