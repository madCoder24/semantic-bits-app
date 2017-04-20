import { Component, OnInit } from '@angular/core';
import { EventsService } from 'app/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  private events: any[];

  constructor(private eventService: EventsService) {}

  ngOnInit() {
    this.eventService.getAllEvents().subscribe(events => {
      this.events = events;
    });
  }

  deleteEvent(id: string) {
    this.eventService.deleteEvent(id).subscribe(event => {
      console.log(event);
    });
  }
}
