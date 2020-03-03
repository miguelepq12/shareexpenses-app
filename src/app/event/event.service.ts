import { Injectable } from '@angular/core';
import {VariablesApp} from '../helpers/variables-app';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Event} from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private URL_EVENT = VariablesApp.URL_API + 'events/';
  public URL_UPLOAD = this.URL_EVENT + 'uploads/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  /*
    Retorno Json: events (Lista de event)
   */
  getEvents(page, name, label): Observable<Event[]> {
    return this.http.get<any>(this.URL_EVENT + '?page=' + page + '&name=' + name + '&label=' + label).pipe(
      map(response => {
        for (const res of response.events as Event[]) {
          res.img = this.URL_UPLOAD + res.img;
        }
        return response.events as Event[];
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  /*
    Retorna Json: individualpays (Numero decimal)
    creditors, debtors (Lista de member)
    event (Event)
   */
  getEvent(idEvent): Observable<any> {
    return this.http.get<any>(this.URL_EVENT + idEvent).pipe(
      map(response => {
        return response;
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  /*
    Retorna Json: labels (lista de Label)
   */
  getCreateInfo(idEvent): Observable<any> {
    return this.http.get<any>(this.URL_EVENT + 'create').pipe(
      map(response => {
        return response;
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.URL_EVENT, event, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  updateEvent(event: Event): Observable<Event> {
    return this.http.put<Event>(this.URL_EVENT + event.id, event, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  deleteEvent(event: Event): Observable<any> {
    return this.http.delete<any>(this.URL_EVENT + event.id).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

}
