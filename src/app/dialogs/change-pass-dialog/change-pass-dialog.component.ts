import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../user/user.service';
import {SnackbarService} from '../../services/snackbar.service';

@Component({
  selector: 'app-change-pass-dialog',
  templateUrl: './change-pass-dialog.component.html',
  styleUrls: ['./change-pass-dialog.component.css']
})
export class ChangePassDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ChangePassDialogComponent>,
              private userService: UserService, private snackbar: SnackbarService) { }

  ngOnInit() {
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public onChange(newPass): void {
    this.userService.changePass(newPass).subscribe(
      response => {
        this.dialogRef.close();
        this.snackbar.showShort('Contraseña cambiada', 'OK');
      },
      error => {
        this.snackbar.showShort('Cambio de contraseña fallido', 'OK');
      });
  }

}
