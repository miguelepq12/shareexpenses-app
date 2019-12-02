import { Injectable } from '@angular/core';
import {VariablesApp} from '../helpers/variables-app';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {PaymentMethod} from './paymentmethod';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  private URL_PM = VariablesApp.URL_API + 'pms/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  /*
   Retorno Json: pms (Lista de PaymentMethod)
  */
  getPms(page): Observable<PaymentMethod[]> {
    return this.http.get<any>(this.URL_PM + '?page=' + page).pipe(
      map(response => {
        return response.pms as PaymentMethod[];
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  /*
    Retorna Json:
   */
  getPm(idPm): Observable<PaymentMethod> {
    return this.http.get<PaymentMethod>(this.URL_PM + idPm).pipe(
      map(response => {
        return response;
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  createPm(pm: PaymentMethod): Observable<PaymentMethod> {
    return this.http.post<PaymentMethod>(this.URL_PM, pm, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  updatePm(pm: PaymentMethod): Observable<PaymentMethod> {
    return this.http.put<PaymentMethod>(this.URL_PM +  pm.id, pm, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  deletePm(pm: PaymentMethod): Observable<any> {
    return this.http.delete<any>(this.URL_PM + pm.id).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

}
