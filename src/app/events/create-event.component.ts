import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
    templateUrl: "./create-event.component.html",
    styles: [`
        em {float:right; color: #E05C65 ; padding-left: 10px;}
    `]

})


export class CreateEventComponent {
    /**
     *
     */
    isDirty: boolean = true;
    event: any
    constructor(private router: Router, private eventService: EventService) {


    }
    ngOnInit() {
        this.event = {
            name: 'Ng Spectacular',
            date: '8/8/2048',
            time: "10AM",
            price: 799.99,
            location: {
                address: "Something",
                city: "Somewhere",
                country: "Angularistan"
            },
            onlineUrl: 'http://ngSpectacular.com',
            imageUrl: 'http://ngSpectacular.com/logo.png'
        }
    }
    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }
    cancel() {
        this.router.navigate(['/events']);
    }
}