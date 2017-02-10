import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `   <div   [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
                
                <h2>{{ event.name }}</h2>
                <div>Date: {{event?.date}}</div>
                <div>Price: {{ event?.price }} </div>
                <div [ngClass]="getTimeClass()" [ngSwitch]="event?.time">
                    Time: {{ event?.time}}
                    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                    <span *ngSwitchDefault>(Normal Start)</span>
                </div>
                <div *ngIf="event?.location">Location: {{ event.location.address + " " + event.location.city}} </div>
                <button class="btn btn-primary" (click)="handleClickMe($event)">Just push it dude!!!</button>
            </div>`,
    styles: [
        `.pad-left {margin-left: 10px;  }
        .well div {color : red; }
        .thumbnail{min-height: 210px;}
        .green{ color: green !important;}
        
        `
    ]
})

//Styles here are only applied for this specific component even if the declaration seems to affect global bootstrap classes
//ngClass conditionally applies classes to your element, you can pass a function like we do here in line 10 or if logic is too simple write it inline
//ngStyle similar to ngClass but applies styles instead of classes

export class EventThumbnailComponent {
    @Input() event: any
    @Output() eventClick = new EventEmitter();
    handleClickMe(data) {
        this.eventClick.emit(data);
    }
    getTimeClass():any {
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return isEarlyStart ? "green" : ""        
    }

}