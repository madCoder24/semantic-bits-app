import { Component, OnInit } from '@angular/core';
import { EventsService } from 'app/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Adverse Events';

  constructor(private eventService: EventsService) {}

  ngOnInit() {
  }
}
