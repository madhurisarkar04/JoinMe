import { Event } from '../models/models';

export class EventService{
    static counter = 0;
    static events = [

        new Event({
            id:1,
            name: 'Trekking Vikarabad',
            description:'Lets go out to vikarabad for trekking :p'
        }),
        new Event({
            id:2,
            name: 'Welcome Freshers',
            description:'An event to welcome freshers'
        }),
        new Event({
            id:3,
            name: 'Weekend get together',
            description:'Lets have a weekend party!!!'
        }),
        new Event({
            id:4,
            name: 'Technovert Outing',
            description:'A regular Technovert outing'
        })
    ];

    createEvent(event){
        event.id = ++EventService.counter;
        EventService.events.push(event);
    }

    getEvents(){
        return EventService.events;
    }

    updateEvent(event){
        EventService.events = EventService.events.map((e)=>{
            return e.id == event.id? event: e;
        });
    }
}