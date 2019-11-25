import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {SidenavService} from "../../services/sidenav.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private imageUpload: any;
  @ViewChild('drawer', {static: false}) drawer: MatSidenav;

  constructor(private sidenavService: SidenavService) {
    sidenavService.openProfile$.subscribe(
      isOpen => {
        this.onClickDrawer(isOpen);
      });
  }

  ngOnInit() {
  }

  public onClickDrawer(isOpen: boolean): void {
    this.drawer.toggle(isOpen);
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();


    myReader.onloadend = (e) => {
      this.imageUpload = myReader.result;
      console.log(this.imageUpload.replace('data:image/png;base64,', 'name:' + file.name + ';'));
    };

    myReader.readAsDataURL(file);
  }

}
