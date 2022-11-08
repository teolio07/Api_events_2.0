/*------------express-------------*/
import express from 'express'; 
/*----------------------routes-------------*/
import ClientRoutes from './ClientRoutes.js';
import PromoterRoutes from './PromoterRoutes.js';
import QualityRoutes from './QualityRoutes.js';
import EventRoutes from './EventRoutes.js';
/*-----------function router---------------*/
function apiRouter(app){
    const router = express.Router();
    app.use('/api/v1',router)
    router.use('/client',ClientRoutes)
    router.use('/promoter',PromoterRoutes)
    router.use('/quality',QualityRoutes)
    router.use('/event',EventRoutes)
/*
    router.use('/ticket')

*/
}

export default apiRouter;

