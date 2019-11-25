import {Component, OnInit} from '@angular/core';
import {ColorEvent} from 'ngx-color';
import {SidenavService} from '../../services/sidenav.service';

@Component({
  selector: 'app-create-label',
  templateUrl: './create-label.component.html',
  styleUrls: ['./create-label.component.css']
})
export class CreateLabelComponent implements OnInit {

  colorsOfPicker = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3',
    '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b',
    '#ffc107', '#ff9800', '#ff5722', '#795548'];

  colorSelect = '#2196f3';

  constructor() {
  }

  ngOnInit() {
  }

  onChangeColor(colorSelect: ColorEvent): void {
    this.colorSelect = colorSelect.color.hex;
  }
}
