import express from 'express';

/* -----------------------------class ------------------------------*/
import PromoterControllers from '../controllers/PromoterControllers.js';


/* -------------------Consts--------------- */

const PromoterRoutes = express.Router();
const promoterControllers = new PromoterControllers();

/*-----------------endpoints--------------------*/
PromoterRoutes.get('/get_promoters',promoterControllers.getPromoters);
PromoterRoutes.post('/save_promoter',promoterControllers.savePromoter);
PromoterRoutes.patch('/update_promoter',promoterControllers.updatePromoter);
PromoterRoutes.get('/get_promoter/:promoter_nit',promoterControllers.getPromoter);
PromoterRoutes.delete('/delete_promoter/:promoter_nit',promoterControllers.deletePromoter);
export default PromoterRoutes;
