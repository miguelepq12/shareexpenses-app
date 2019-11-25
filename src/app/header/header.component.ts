import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SidenavService} from '../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  @Input() showLabel: boolean;
  @Output() searchText = new EventEmitter<string>();
  @Output() labelSelect = new EventEmitter<string>();

  constructor(private sidenavService: SidenavService) { }

  public onClickDrawer(): void {
    this.sidenavService.toggle(true);
  }

  public onClickProfile(): void {
    this.sidenavService.toggleProfile(true);
  }

  public onSearchText(text: string): void {
    this.searchText.emit(text);
  }

  public onSelectLabel(value: string): void {
    this.labelSelect.emit(value);
  }
}
