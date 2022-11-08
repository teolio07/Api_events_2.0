import TicketServices from '../services/TickerServices.js';

class TicketControllers{
   async getTickets(req,res){
        try{
            const ticketServices = new TicketServices();
            const tickets = await ticketServices.getTickets();
            res.json(tickets); 
        } 
        catch(error){
            console.log('Error in controllers');
        }
    }
   async  getTicket(req,res){
        try{
            const {ticket_cod} = req.params;
            const ticketServices = new TicketServices();
            ticketServices.ticket_cod = ticket_cod;
            const getTicket = await ticketServices.getTicket() 
            res.json(getTicket)
        } 
        catch(error){
            console.log('Error in controllers');
        }   
    }
   async  saveTicket(req,res){
        try{
            const {ticket_cod,price,event_cod,quality_cod,client_id} = req.body; 
            const ticketServices = new TicketServices();
            ticketServices.ticket_cod = ticket_cod;
            ticketServices.price = price;
            ticketServices.event_cod = event_cod;
            ticketServices.quality_cod = quality_cod;
            ticketServices.client_id = client_id;
            const saveTicket = await ticketServices.saveTicket();
            res.json(saveTicket); 
        } 
        catch(error){
            console.log('Error in controllers');
        }  
    }
   async  updateTicket(req,res){
        try{
            const {ticket_cod,price,event_cod,quality_cod,client_id} = req.body; 
            const ticketServices = new TicketServices();
            ticketServices.ticket_cod = ticket_cod;
            ticketServices.price = price;
            ticketServices.event_cod = event_cod;
            ticketServices.quality_cod = quality_cod;
            ticketServices.client_id = client_id;
            const updateTicket = await ticketServices.updateTicket();
            res.json(updateTicket);
        } 
        catch(error){
            console.log('Error in controllers');
        } 
    }
   async  deleteTicket(req,res){
        try{
            const {ticket_cod} = req.params;
            const ticketServices = new TicketServices();
            ticketServices.ticket_cod = ticket_cod;
            const deleteTicket = await ticketServices.deleteTicket(); 
            res.json(deleteTicket)

        } 
        catch(error){
            console.log('Error in controllers');
        }
    }
 

}

export default TicketControllers;
