import {User} from '../user/user';
import {Injectable} from '@angular/core';

@Injectable()
export class LocalUserService {
  static readonly KEY_DATA_USER = 'datauser';
  private localUser: User;

  setUser(userLocal: User): void {
    localStorage.setItem(LocalUserService.KEY_DATA_USER, JSON.stringify(userLocal));
    this.localUser = userLocal;
  }

  getUser(): User {
    if (this.localUser != null) {
      return this.localUser;
    } else if (localStorage.length > 0) {
      this.localUser = JSON.parse(localStorage.getItem(LocalUserService.KEY_DATA_USER));
      return this.localUser;
    } else {
      return null;
    }
  }

}
