/* -------------------------express------------------------------ */
import express from 'express';

/* -----------------------------class ------------------------------*/
import QualityControllers from '../controllers/QualityControllers.js';


/* -------------------Consts--------------- */

const QualityRoutes = express.Router();
const qualityControllers = new QualityControllers();


/*-----------------------endpoints ------------------*/
QualityRoutes.get('/get_qualities',qualityControllers.getQualities);
QualityRoutes.get('/get_quality/:quality_cod',qualityControllers.getQuality);
QualityRoutes.post('/save_quality',qualityControllers.saveQuality);
QualityRoutes.patch('/update_quality',qualityControllers.updateQuality);
QualityRoutes.delete('/delete_quality/:quality_cod',qualityControllers.deleteQuality);


export default QualityRoutes;

