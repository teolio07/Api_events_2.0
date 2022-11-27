/*--------------express----------*/
import express  from "express";

/* -----------------------------class ------------------------------*/
import ClientControllers   from '../controllers/ClientControllers.js';

/* -------------------Consts--------------- */
const clientControllers = new ClientControllers();
const clientRoutes = express.Router();

/*-----------------endpoints--------------------*/
clientRoutes.get('/get_clients',clientControllers.getClients);
clientRoutes.get('/get_client/:client_id',clientControllers.getClient)
clientRoutes.post('/save_client',clientControllers.saveClient)
clientRoutes.post('/login_client',clientControllers.LoginUser)
clientRoutes.patch('/update_client',clientControllers.updateClient)
clientRoutes.delete('/delete_client/:client_id',clientControllers.deleteClient)

export default clientRoutes;

