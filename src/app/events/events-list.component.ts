import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({

  template: `
        <div>
            <h4>Upcoming Angular 2 Events </h4>
            <hr>
            <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)"  [event]="event" ></event-thumbnail>
            <div>     
            </div>
        </div>
        `
  //vs code has the angular2-inline extensions to support highlighting for inline templates 
})

export class EventsListComponent implements OnInit {
  
  events: any[]
  constructor(private eventService: EventService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr)
  }
  handleThumbnailClick(eventName) {
    this.toastr.success(eventName)
  }
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}