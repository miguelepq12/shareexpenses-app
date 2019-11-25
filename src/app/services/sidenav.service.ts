import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class SidenavService {

  private openSource = new Subject<boolean>();
  private openProfileSource = new Subject<boolean>();

  open$ = this.openSource.asObservable();
  openProfile$ = this.openProfileSource.asObservable();


  toggle(isOpen: boolean): void {
    this.openSource.next(isOpen);
  }

  toggleProfile(isOpen: boolean): void {
    this.openProfileSource.next(isOpen);
  }
}
