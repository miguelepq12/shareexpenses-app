import {Component, OnInit} from '@angular/core';
import {SidenavService} from '../../services/sidenav.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private sidenavService: SidenavService, private router: Router) {
  }

  public searchForText(text: string): void {
    console.log('Enviar texto a servidor' + text);
  }

  public searchForLabel(label: string): void {
    console.log('Enviar label a servidor ' + label);
  }

  public addEvent(): void {
    this.router.navigate(['events', 'create']);
  }

  public toEvent(): void {
    this.router.navigate(['events', 'show', '1']);
  }

  ngOnInit(): void {
  }
}
