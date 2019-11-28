import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../user';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LocalUserService} from '../../services/local-user.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: User = new User();

  constructor(private router: Router, private userService: LocalUserService,
              private snackBar: MatSnackBar, private auth: AuthService) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
   if (this.userService.getUser() != null) {
     this.router.navigate(['home']);
   }
  }

  signIn() {
    //
    this.auth.login(this.user.username, this.user.pass).subscribe(
      user => {
        if (user != null) {
          this.openSnackBar('Ha iniciado sesión', 'OK');
          this.router.navigate(['home']);
        }
      },
      err => {
        console.log(err.mensaje);
        if (err.status === 401) {
          this.openSnackBar('Los datos son incorrectos', 'OK');
        } else {
          this.openSnackBar('Ha sucedido un error', 'OK');
        }

      }
    );

  }

}
