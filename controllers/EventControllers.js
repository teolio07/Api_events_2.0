import EventServices from '../services/EventServices.js';
class EventControllers{
    async getEvents(req,res){
        try{
            const eventServices = new EventServices(); 
            const events = await eventServices.getEvents();
            res.json(events)

        }catch(error){console.log('Errror getting events in controllers '+error.message)}
    }
    async getEvent(req,res){
        try{
        const {event_cod} = req.params;
        const eventServices = new EventServices(); 
        eventServices.event_cod = event_cod;
        const event = await eventServices.getEvent();
        res.json(event)
        }
        catch(error){console.log('Error gettin event in controllers '+error.message)}
    }
 
 
    async saveEvent(req,res){
        try{
        const {event_cod,
                event_name,
                event_date,
                event_time,
                event_address,
                publication_date,
                description,
                promoter_nit

            } = req.body;
            console.log(description)
            const eventServices = new EventServices();        
            eventServices.event_cod = event_cod; 
            eventServices.event_name = event_name; 
            eventServices.event_date = event_date; 
            eventServices.event_time = event_time; 
            eventServices.event_address = event_address; 
            eventServices.publication_date = publication_date;
            eventServices.description = description;
            eventServices.promoter_nit = promoter_nit;
            const saveEvent = await eventServices.saveEvent();
            res.json(saveEvent);
        }catch(error){console.log('Error saving event in controllers '+error.message)}    
    }    
  async updateEvent(req,res){
        try{
            const {event_cod,
                    event_name,
                    event_date,
                    event_time,
                    event_address,
                    publication_date,
                    description,
                    promoter_nit
                } = req.body;
            const eventServices = new EventServices();        
            eventServices.event_cod = event_cod; 
            eventServices.event_name = event_name; 
            eventServices.event_date = event_date; 
            eventServices.event_time = event_time; 
            eventServices.event_address = event_address; 
            eventServices.publication_date = publication_date;
            eventServices.description = description;
            eventServices.promoter_nit = promoter_nit;
            const updateEvent = await eventServices.updateEvent();
            res.json(updateEvent);
        }
        catch(error){console.log('Error updating event in controllers '+error.message)}
    }
   async deleteEvent(req,res){
        try{
            const {event_cod} = req.params;
            const eventServices = new EventServices(); 
            eventServices.event_cod = event_cod;
            const deleteEvent = await eventServices.deleteEvent();
            res.json(deleteEvent)
        }
        catch(error){'Error deleting event in controllers '+error.message}

    }

}

export default EventControllers;
