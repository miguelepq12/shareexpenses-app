import {Component, OnInit} from '@angular/core';
import {SidenavService} from '../../services/sidenav.service';
import {Router} from '@angular/router';
import {EventService} from '../event.service';
import {Event} from '../event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[];
  page: number;
  nameSearch: string;
  labelSearch: string;

  constructor(private sidenavService: SidenavService, private router: Router,
              private eventService: EventService) {
  }

  public searchForText(text: string): void {
    this.nameSearch = text;
    this.eventService.getEvents(this.page, this.nameSearch, this.labelSearch).subscribe(
      result => {
        this.events = result;
      }
    );
  }

  public searchForLabel(label: string): void {
    this.labelSearch = label;
    this.eventService.getEvents(this.page, this.nameSearch, this.labelSearch).subscribe(
      result => {
        this.events = result;
      }
    );
  }

  public addEvent(): void {
    this.router.navigate(['events', 'create']);
  }

  public toEvent(event: Event): void {
    this.router.navigate(['events', 'show', event.id]);
  }

  ngOnInit(): void {
    this.page = 0;
    this.labelSearch = '';
    this.nameSearch = '';
    this.eventService.getEvents(this.page, this.nameSearch, this.labelSearch).subscribe(
      result => {
        this.events = result;
      }
    );
  }
}
