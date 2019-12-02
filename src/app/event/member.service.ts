import { Injectable } from '@angular/core';
import {VariablesApp} from '../helpers/variables-app';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Member} from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private URL_MEMBER = VariablesApp.URL_API + 'members/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  /*
    Retorno Json: members (lista de Member)
   */
  getMembers(eventId): Observable<Member[]> {
    return this.http.get<any>(this.URL_MEMBER + '?event=' + eventId).pipe(
      map(response => {
        return response.members as Member[];
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  addMember(member: Member, eventId): Observable<Member> {
    return this.http.post<Member>(this.URL_MEMBER, member, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  updateMember(member: Member): Observable<Member> {
    return this.http.put<Member>(this.URL_MEMBER + member.id, member, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  deleteMember(member: Member): Observable<any> {
    return this.http.delete<any>(this.URL_MEMBER + member.id).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

}
