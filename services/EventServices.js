import {Event} from '../models/Event.js';

class EventServices{
constructor(event_cod,event_name,event_date,event_time,event_address,common_price,common_quantity,vip_price,vip_quantity,publication_date,promoter_nit){
        this.event_cod = event_cod;
        this.event_name = event_name;
        this.event_date = event_date;
        this.event_time = event_time;
        this.event_address = event_address;
        this.common_price = common_price;
        this.common_quantity = common_quantity;
        this.vip_price = vip_price;
        this.vip_quantity = vip_quantity;
        this.publication_date = publication_date;
        this.promoter_nit = promoter_nit;
    }
    async getEvents(){
        try{
            const clients = await Event.findAll(); 
            return clients
        }
        catch(error){console.log('error getting events in services')}
    }
    async getEvent(){
        try{
            let g_event_cod = this.event_cod;
            const clients = await Event.findOne({where: {event_cod: g_event_cod}}); 
            return clients
        }
        catch(error){console.log('error getting event in services')}
    }
    async saveEvent(){
    const event = {
        event_cod :this.event_cod,
        event_name: this.event_name,
        event_date: this.event_date,
        event_time: this.event_time,
        event_address: this.event_address,
        common_price: this.common_price,
        common_quantity :this.common_quantity,
        vip_price :this.vip_price,
        vip_quantity : this.vip_quantity,
        publication_date :this.publication_date,
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
            common_price: this.common_price,
            common_quantity :this.common_quantity,
            vip_price :this.vip_price,
            vip_quantity : this.vip_quantity,
            publication_date :this.publication_date,
            promoter_nit : this.promoter_nit
            }
            let u_event_cod = this.event_cod;
            const updateEvent = await Event.update(event,{where:{event_cod:u_event_cod}});
            return updateEvent;
        }
        catch(error){console.log(error)}
   }
   async deleteEvent(){
        try{
            let d_event_cod = this.event_cod;
            const deleteEvent = await Event.destroy({where: {event_cod:d_event_cod}});    
            return deleteEvent
        }
        catch(error){console.log('Error deleting event in servies')}
    }
    
}


export default EventServices;
