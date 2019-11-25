import {AfterViewChecked, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {SidenavService} from './services/sidenav.service';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'shareexpenses-app';

  @ViewChild('drawer', {static: false}) drawer: MatSidenav;

  constructor(private sidenavService: SidenavService) {
    sidenavService.open$.subscribe(
      isOpen => {
        this.onClickDrawer(isOpen);
      });
  }

  public onClickDrawer(isOpen: boolean): void {
    this.drawer.toggle(isOpen);
  }

}
