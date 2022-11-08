import {Ticket} from '../models/Ticket.js';
class TicketServices{
    constructor(ticket_cod,price,event_cod,quality_cod,client_id){
        this.ticket_cod = ticket_cod;
        this.price = price;
        this.event_cod = event_cod;
        this.quality_cod = quality_cod;
        this.client_id = client_id;
    }    

    async getTickets(){
        try{
            const tickets = await Ticket.findAll();
            return tickets;
        }
        catch(error){
            console.log('error in services');
        }
    }    
    async getTicket(){
        try{
            let g_ticket_cod = this.ticket_cod;
            const ticket = Ticket.findOne({where:{ticket_cod: g_ticket_cod}});
            return ticket;
        }
        catch(error){
            console.log('error in services');
        }
    }
    async saveTicket(){
        try{
            const ticket = {
                            ticket_cod:this.ticket_cod,
                            price: this.price,
                            event_cod:this.event_cod,
                            quality_cod: this.quality_cod,
                            client_id:this.client_id
                        }
            const saveTicket = await Ticket.create(ticket);
            return saveTicket;

        }
        catch(error){
            console.log('error in services');
        }
    }
    async updateTicket(){
        try{
            const ticket = {
                            ticket_cod:this.ticket_cod,
                            price: this.price,
                            event_cod:this.event_cod,
                            quality_cod: this.quality_cod,
                            client_id:this.client_id
                        }
            let u_ticket_cod = this.ticket_cod;
            const updateTicket = await Ticket.update(ticket,{where:{ticket_cod:u_ticket_cod }});
            return updateTicket;

        }
        catch(error){
            console.log('error in services');
        }

    }
    async deleteTicket(){
        try{
            let d_ticket_cod = this.ticket_cod;
            const deleteTicket = await Ticket.destroy({where:{ticket_cod: d_ticket_cod}});
            return deleteTicket;
        }
        catch(error){
            console.log('error in services');
        }
    }
}


export default TicketServices;
