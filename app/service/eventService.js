export class EventService{
    static events = [];

    createEvent(event){
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