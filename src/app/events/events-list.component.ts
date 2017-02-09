import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-list',
  template: `
        <div>
            <h4>Upcoming Angular 2 Events </h4>
            <hr>
            <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (eventClick)="handleEventClicked($event)"  [event]="event" ></event-thumbnail>
            <div>     
            </div>
        </div>
        `
  //vs code has the angular2-inline extensions to support highlighting for inline templates 
})

export class EventsListComponent implements OnInit {
  events: any[]
  constructor(private eventService: EventService) {

  }
  handleEventClicked(data) {
    console.log('received:', data)

  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}