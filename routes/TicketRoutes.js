/*----------------express-----------*/
import express from 'express';

/*----------------class---------------*/
import TicketControllers from '../controllers/TicketControllers.js'

/*-----------const-----------*/
const TicketRoutes = express.Router();
const ticketControllers = new TicketControllers();
/*------------enpoints--------------*/
TicketRoutes.get('/get_tickets',ticketControllers.getTickets);
TicketRoutes.post('/save_ticket',ticketControllers.saveTicket);
TicketRoutes.patch('/update_ticket',ticketControllers.updateTicket);
TicketRoutes.get('/get_event/:ticket_cod',ticketControllers.getTicket);
TicketRoutes.delete('/delete_events/:ticket_cod',ticketControllers.deleteTicket);
export default TicketRoutes;


