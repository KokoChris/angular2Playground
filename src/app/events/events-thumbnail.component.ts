import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `   <div class="well hoverwell thumbnail">
                <h3>{{ event.name }}</h3>
                <div>Price: {{ event.price }} </div>
                <div>Location: {{ event.location.address + " " + event.location.city}} </div>
                <button class="btn btn-primary" (click)="handleClickMe($event)">Just push it dude!!!</button>
            </div>`,
    styles: [
        `.pad-left {margin-left: 10px; }
        .well div {color : red; }
        `
    ]
})
//Styles here are only applied for this specific component even if the declaration is  

export class EventThumbnailComponent {
    @Input() event: any
    @Output() eventClick = new EventEmitter();
    handleClickMe(data) {
        this.eventClick.emit(data);
    }

}