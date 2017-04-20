import { Component, Input, OnInit } from '@angular/core';
import { EventsService } from 'app/events.service';

import * as moment from 'moment';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  private events: any[];

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.eventService.getAllEvents().subscribe(events => {
      events.map((value, index, arr) => {
        value.receiveDate = moment(value.receiveDate, 'YYYYMMDD').format('MMM Do YYYY');
        value.receiptDate = moment(value.receiptDate, 'YYYYMMDD').format('MMM Do YYYY');
        return value;
      });
      this.events = events;
    });
  }

  deleteEvent(id: string) {
    this.eventService.deleteEvent(id).subscribe(event => {
      this.eventService.getAllEvents().subscribe(events => {
        this.events = events;
      });
    });
  }

}
