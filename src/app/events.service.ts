import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {

  constructor(private http: Http) { }

  getAllEvents() {
    return this.http.get('/api')
      .map(res => res.json());
  }

  deleteEvent(id: string) {
    return this.http.delete('/api/' + id)
      .map(res => res.json());
  }

}
