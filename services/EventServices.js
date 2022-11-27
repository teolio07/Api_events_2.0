import {Event} from '../models/Event.js';
import { v4 as uuid } from 'uuid';

class EventServices{
constructor(event_cod,event_name,event_date,event_time,event_address,publication_date,description,promoter_nit){
        this.event_cod = event_cod;
        this.event_name = event_name;
        this.event_date = event_date;
        this.event_time = event_time;
        this.event_address = event_address;
        this.publication_date = publication_date;
        this.description = description;
        this.promoter_nit = promoter_nit;
    }
    async getEvents(){
        try{
            const clients = await Event.findAll(); 
            return clients
        }
        catch(error){console.log('error getting events in services '+error.message)}
    }
    async getEvent(){
        try{
            let g_event_cod = this.event_cod;
            const clients = await Event.findOne({where: {event_cod: g_event_cod}}); 
            return clients
        }
        catch(error){console.log('error getting event in services '+error.message)}
    }
    async saveEvent(){
    const event = {
        event_cod: uuid(),
        event_name: this.event_name,
        event_date: this.event_date,
        event_time: this.event_time,
        event_address: this.event_address,
        publication_date :this.publication_date,
        description: this.description,
        promoter_nit : this.promoter_nit
        }
        const saveEvent = await Event.create(event);
        return saveEvent;
    }
    async updateEvent(){
        try{
            const event = {
            event_cod :this.event_cod,
            event_name: this.event_name,
            event_date: this.event_date,
            event_time: this.event_time,
            event_address: this.event_address,
            publication_date :this.publication_date,
            description: this.description,
            promoter_nit : this.promoter_nit
            }
            let u_event_cod = this.event_cod;
            const updateEvent = await Event.update(event,{where:{event_cod:u_event_cod}});
            return updateEvent;
        }
        catch(error){console.log('Error updating event in servies '+error.message)}
   }
   async deleteEvent(){
        try{
            let d_event_cod = this.event_cod;
            const deleteEvent = await Event.destroy({where: {event_cod:d_event_cod}});    
            return deleteEvent
        }
        catch(error){console.log('Error deleting event in servies '+error.message)}
    }
    
}


export default EventServices;
