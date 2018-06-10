import { Event } from '../models/models';

export class EventService{
    static counter = 0;
    static events = [

        new Event({
            id:1,
            name: 'staic event',
            description:'existing data here'
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