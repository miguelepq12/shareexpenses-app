import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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
