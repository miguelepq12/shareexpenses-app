import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor( private snackBar: MatSnackBar) { }

  showShort(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
