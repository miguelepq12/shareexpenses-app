import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Member} from '../../event/member';

export interface AddMemberDialogData {
  idEvent: number;
  confirm: boolean;
  member: Member;
}

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.css']
})
export class AddMemberDialogComponent implements OnInit {

  loadSpinner = false;

  constructor(
    public dialogRef: MatDialogRef<AddMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddMemberDialogData) {}

  ngOnInit() {
  }

  public onCancel(): void {
    this.data.confirm = false;
    this.dialogRef.close(this.data);
  }

  public onAdd(): void {
    this.data.confirm = true;
    this.loadSpinner = true;
    setTimeout(() => {
      this.dialogRef.close(this.data);
    }, 3000);
  }
}
