import EventServices from '../services/EventServices.js';
class EventControllers{
    async getEvents(req,res){
        const eventServices = new EventServices(); 
        const events = await eventServices.getEvents();
        res.json(events)
    }
    async getEvent(req,res){
        const {event_cod} = req.params;
        const eventServices = new EventServices(); 
        eventServices.event_cod = event_cod;
        const event = await eventServices.getEvent();
        res.json(event)
    }
 
 
    async saveEvent(req,res){
        const {event_cod,
        event_name,
        event_date,
        event_time,
        event_address,
        publication_date,
        promoter_nit
 } = req.body;
        const eventServices = new EventServices();        
        eventServices.event_cod = event_cod; 
        eventServices.event_name = event_name; 
        eventServices.event_date = event_date; 
        eventServices.event_time = event_time; 
        eventServices.event_address = event_address; 
        eventServices.publication_date = publication_date;
        eventServices.promoter_nit = promoter_nit;
        const saveEvent = await eventServices.saveEvent();
        res.json(saveEvent);
            
    }    
  async updateEvent(req,res){
        const {event_cod,
        event_name,
        event_date,
        event_time,
        event_address,
        publication_date,
        promoter_nit
 } = req.body;
        const eventServices = new EventServices();        
        eventServices.event_cod = event_cod; 
        eventServices.event_name = event_name; 
        eventServices.event_date = event_date; 
        eventServices.event_time = event_time; 
        eventServices.event_address = event_address; 
        eventServices.publication_date = publication_date;
        eventServices.promoter_nit = promoter_nit;
        const updateEvent = await eventServices.updateEvent();
        res.json(updateEvent);
 
    }
   async deleteEvent(req,res){
        const {event_cod} = req.params;
        const eventServices = new EventServices(); 
        eventServices.event_cod = event_cod;
        const deleteEvent = await eventServices.deleteEvent();
        res.json(deleteEvent)

    }

}

export default EventControllers;
