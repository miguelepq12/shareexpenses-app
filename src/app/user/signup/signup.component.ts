import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loadSpinner = true;
  private imageUpload: any;
  private user: User = new User();
  private errors;

  constructor(private userService: UserService, private snackBar: MatSnackBar,
              private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  loadImage($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();


    myReader.onloadend = (e) => {
      this.imageUpload = myReader.result;
      this.user.profileImg = this.imageUpload.replace('data:image/png;base64,', 'name:' + file.name + ';');
    };

    myReader.readAsDataURL(file);
  }

  onSignUp(): void {
    this.userService.signUp(this.user).subscribe(
      response => {
        this.auth.saveUserToken(response.user, response.token);
        this.openSnackBar(response.mensaje, 'OK');
        this.router.navigate(['home']);
      },
      response => {
        console.log(response.error);
        this.errors = response.error.errors;
        console.log('Mensaje del servidor ' + response.error.mensaje);
        console.log(this.errors);
      }
    );
  }
}
