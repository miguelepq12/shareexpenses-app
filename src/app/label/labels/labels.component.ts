import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../dialogs/confirm-dialog/confirm-dialog.component';
import {SidenavService} from '../../services/sidenav.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {

  constructor(public dialog: MatDialog, private sidenavService: SidenavService, private router: Router) {
  }

  ngOnInit() {
  }

  public searchForText(text: string): void {

  }

  public deleteLabel(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {confirm: false, message: 'Eliminar Etiqueta'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  public addLabel(): void {
    this.router.navigate(['labels', 'create']);
  }
}
