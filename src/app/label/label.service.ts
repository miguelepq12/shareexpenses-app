import { Injectable } from '@angular/core';
import {VariablesApp} from '../helpers/variables-app';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Label} from './label';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  private URL_LABEL = VariablesApp.URL_API + 'labels/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  /*
    Retorno Json: labels (Lista de label)
   */
  getLabels(page): Observable<Label[]> {
    return this.http.get<any>(this.URL_LABEL + '?page=' + page).pipe(
      map(response => {
        return response.labels as Label[];
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  /*
    Retorna Json:
   */
  getLabel(idLabel): Observable<Label> {
    return this.http.get<Label>(this.URL_LABEL + Label).pipe(
      map(response => {
        return response;
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  createLabel(label: Label): Observable<Label> {
    return this.http.post<Label>(this.URL_LABEL, label, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  updateLabel(label: Label): Observable<Label> {
    return this.http.put<Label>(this.URL_LABEL + label.id, label, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  deleteLabel(label: Label): Observable<any> {
    return this.http.delete<any>(this.URL_LABEL + label.id).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }
}
