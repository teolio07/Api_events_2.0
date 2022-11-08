/*------------express------------*/
import express from 'express';

/*---------class--------*/
import EvenControllers from '../controllers/EventControllers.js';
const eventControllers = new EvenControllers();

/*---------const-------------*/
const EventRoutes = express.Router();
EventRoutes.get('/get_events',eventControllers.getEvents)
EventRoutes.post('/save_event',eventControllers.saveEvent)
EventRoutes.patch('/update_event',eventControllers.updateEvent)
EventRoutes.get('/get_event/:event_cod',eventControllers.getEvent)
EventRoutes.delete('/delete_event',eventControllers.deleteEvent)

export default EventRoutes;

