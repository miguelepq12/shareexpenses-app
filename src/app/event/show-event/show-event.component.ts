import { Component, OnInit } from '@angular/core';
import {SidenavService} from '../../services/sidenav.service';
import {ActivatedRoute} from '@angular/router';
import {ProgressSpinnerService} from '../../services/progress-spinner.service';
import {MatDialog} from '@angular/material/dialog';
import {AddMemberDialogComponent} from '../../dialogs/add-member-dialog/add-member-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent implements OnInit {
  id: string;

  constructor(public dialog: MatDialog, private sidenavService: SidenavService,
              private activatedRoute: ActivatedRoute, private progress: ProgressSpinnerService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
      setTimeout(() => {
        this.progress.hide();
      }, 3000);
    });
  }

  addMember(): void {
    const dialogRef = this.dialog.open(AddMemberDialogComponent, {
      width: '300px',
      data: {confirm: false, idEvent: this.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result.confirm);
      this.openSnackBar('Miembro agregado', 'Hecho');
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
