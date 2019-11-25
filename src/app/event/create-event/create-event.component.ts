import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SidenavService} from '../../services/sidenav.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  private imageUpload: any;

  constructor() { }

  ngOnInit() {
  }

  loadImage($event): void {

    console.log('hola');
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
