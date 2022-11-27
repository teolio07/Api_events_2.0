import QualityServices from '../services/QualityServices.js';
import Joi from 'joi';

const schemaGetQuality = Joi.object({
    quality_cod: Joi.string().min(1).max(255).required(),
})

const schemaSaveQuality = Joi.object({
    quality_type: Joi.string().min(1).max(255).required(),
    price: Joi.string().min(1).max(255).required(),
    event_cod: Joi.string().min(1).max(255).required(),
})

const schemaUpdateQuality = Joi.object({
    quality_cod: Joi.string().min(1).max(255).required(),
    quality_type: Joi.string().min(1).max(255).required(),
    price: Joi.string().min(1).max(255).required(),
    event_cod: Joi.string().min(1).max(255).required(),
})

const schemaDeleteQuality = Joi.object({
    quality_cod: Joi.string().min(1).max(255).required(),
})

class QualityControllers {
    
    async getQualities(req,res){
        try{
            const qualityServices = new QualityServices();
            const getQualities = await qualityServices.getQualities();
            res.json(getQualities);
        }
        catch(error){
            console.log('error getting qualities in controllers');
        }
    }
    async getQuality(req,res){
        const {error} = schemaGetQuality.validate(req.params)
        if(error){
             return res.status(400).json(
                {error: error.details[0].message}
            )  
        }
 
        try{
            const {quality_cod} = req.params;
            const qualityServices = new QualityServices();
            qualityServices.quality_cod = quality_cod;
            const getQuality = await qualityServices.getQuality();
            res.json(getQuality); 
        }
        catch(error){
            console.log('error getting quality in controlles');
        }
    }
    async saveQuality(req,res){
        const {error} = schemaSaveQuality.validate(req.body)
        if(error){
             return res.status(400).json(
                {error: error.details[0].message}
            )  
        }

        try{
            const {quality_type,price,event_cod} = req.body;
            const qualityServices = new QualityServices();
            qualityServices.quality_type = quality_type;
            qualityServices.price = price;
            qualityServices.event_cod = event_cod;
            const saveQuality = await qualityServices.saveQuality();
            res.json(saveQuality);

        }
        catch(error){console.log(error)}

    }
    async updateQuality(req,res){
        const {error} = schemaUpdateQuality.validate(req.body)
        if(error){
             return res.status(400).json(
                {error: error.details[0].message}
            )  
        }

        try{
            const {quality_cod,quality_type,event_cod,price} = req.body;
            const qualityServices = new QualityServices();
            qualityServices.quality_cod = quality_cod;
            qualityServices.quality_type = quality_type;
            qualityServices.price = price;
            qualityServices.event_cod = event_cod;
            const updateQuality = await qualityServices.updateQuality();
            res.json(updateQuality);

        }
        catch(error){console.log('error saving quality in controllers')}

    }
    async deleteQuality(req,res){
        const {error} = schemaDeleteQuality.validate(req.params)
        if(error){
             return res.status(400).json(
                {error: error.details[0].message}
            )  
        }


        try{
            const {quality_cod} = req.params;
            const qualityServices = new QualityServices();
            qualityServices.quality_cod = quality_cod;
            const deleteQuality = await qualityServices.deleteQuality();
            res.json(deleteQuality); 
        }
        catch(error){
            console.log('error getting quality in controlles');
        }
    }
}

export default QualityControllers;
