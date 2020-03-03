import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SidenavService} from '../services/sidenav.service';
import {LabelService} from "../label/label.service";
import {Label} from "../label/label";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() showLabel: boolean;
  @Output() searchText = new EventEmitter<string>();
  @Output() labelSelect = new EventEmitter<string>();

  labels: Label[];
  imgUser: string;

  constructor(private sidenavService: SidenavService,
              private labelService: LabelService, private userService: UserService) { }

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

  ngOnInit(): void {
    this.labelService.getLabels(0).subscribe(
      result => {
        this.labels = result;
      }
    );

    this.userService.getProfile().subscribe(
      result => {
        this.imgUser = result.profileImg;
      }
    );
  }
}
