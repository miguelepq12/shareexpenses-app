import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {SidenavService} from '../../services/sidenav.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../user';
import {UserService} from '../user.service';
import {SnackbarService} from '../../services/snackbar.service';
import {AddMemberDialogComponent} from '../../dialogs/add-member-dialog/add-member-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private imageUpload: any;
  @ViewChild('drawer', {static: false}) drawer: MatSidenav;
  private localUser: User = new User();

  constructor(public dialog: MatDialog,
              private sidenavService: SidenavService, private auth: AuthService, private router: Router,
              private userService: UserService, private snackbar: SnackbarService ) {

    sidenavService.openProfile$.subscribe(
      isOpen => {
        this.onClickDrawer(isOpen);
      });

    auth.currentUser.subscribe(user => {
      this.localUser = user;
    });
  }

  ngOnInit() {
  }

  public onClickDrawer(isOpen: boolean): void {
    this.drawer.toggle(isOpen);

    if (!isOpen) {
      this.imageUpload = UserService.URL_UPLOAD + this.localUser.profileImg;
    }
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.imageUpload = myReader.result;
      this.changeImg(this.imageUpload, file.name);
    };

    myReader.readAsDataURL(file);
  }

  changeImg(img: any, name: string) {
    img = 'name:' + name + ';;' + img;
    this.userService.changeImage(img).subscribe(
      response => {
        this.auth.saveUserToken(response, this.localUser.token);
        this.snackbar.showShort('Imagen cambiada con exito', 'OK');
    },
      error => {
        this.snackbar.showShort('Error al actualizar imagen', 'OK');
      });
  }

  changePass() {
    const dialogRef = this.dialog.open(AddMemberDialogComponent, {
      width: '300px'
    });
  }

  signOut() {
    this.auth.logout();
    this.drawer.toggle(false);
    this.router.navigate(['login']);
  }
}
