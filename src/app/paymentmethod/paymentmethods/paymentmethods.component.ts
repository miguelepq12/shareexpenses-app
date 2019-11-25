import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SidenavService} from '../../services/sidenav.service';
import {ConfirmDialogComponent} from '../../dialogs/confirm-dialog/confirm-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-paymentmethods',
  templateUrl: './paymentmethods.component.html',
  styleUrls: ['./paymentmethods.component.css']
})
export class PaymentmethodsComponent implements OnInit {

  constructor(public dialog: MatDialog, private sidenavService: SidenavService, private router: Router) {

  }

  ngOnInit() {
  }

  public searchForText(text: string): void {

  }

  public deletePm(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {confirm: false, message: 'Eliminar metodo de pago'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  public addPm(): void {
    this.router.navigate(['pms', 'create']);
  }
}
