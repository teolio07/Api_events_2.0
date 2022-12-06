import PromoterServices from '../services/PromoterServices.js';

import Joi from 'joi';


const schemaGetPromoter = Joi.object({
    promoter_nit: Joi.string().min(1).max(255).required(),
 })

const schemaSavePromoter = Joi.object({
     promoter_nit: Joi.string().min(1).max(255).required(),
    name: Joi.string().min(1).max(255).required(),
    address: Joi.string().min(1).max(255).required(),
    phone: Joi.string().min(1).max(255).required(),
    password: Joi.string().min(1).max(255).required(),
    information: Joi.string().min(1).max(255).required(),
    facebook: Joi.string().min(1).max(255).required(),
    instagram: Joi.string().min(1).max(255).required(),
    twitter: Joi.string().min(1).max(255).required(),
    email: Joi.string().min(1).max(255).required().email(),
   
})
const schemaUpdatePromoter = Joi.object({
     promoter_nit: Joi.string().min(1).max(255).required(),
    name: Joi.string().min(1).max(255).required(),
    address: Joi.string().min(1).max(255).required(),
    phone: Joi.string().min(1).max(255).required(),
    password: Joi.string().min(1).max(255).required(),
    information: Joi.string().min(1).max(255).required(),
    facebook: Joi.string().min(1).max(255).required(),
    instagram: Joi.string().min(1).max(255).required(),
    twitter: Joi.string().min(1).max(255).required(),
    email: Joi.string().min(1).max(255).required().email(),
   
})
const schemaDeletePromoter = Joi.object({
    promoter_nit: Joi.string().min(1).max(255).required(),
 })



class PromoterControllers{
    async getPromoters(req,res){
        try{
            const promoterServices = new PromoterServices();

            const getPromoters = await promoterServices.getPromoters(); 

            res.json(getPromoters);   
        }
        catch(error){console.log('error getting promoters in controllers')}
    }
    async getPromoter(req,res){
        const {error} = schemaGetPromoter.validate(req.params);
        if(error){
             return res.status(400).json(
                {error: error.details[0].message}
            )   
           
        }
        try{
            const {promoter_nit} = req.params;

            const promoterServices = new PromoterServices();

            promoterServices.promoter_nit = promoter_nit;

            const getPromoter = await promoterServices.getPromoter(); 

            res.json(getPromoter);   
        }
        catch(error){console.log('error getting promoters in controllers')}
    }
    async savePromoter(req,res){
        const {error} = schemaSavePromoter.validate(req.body)
        if(error){
             return res.status(400).json(
                {error: error.details[0].message}
            )  
        }
        try{

            const {promoter_nit,name,address,phone,email,password,information,facebook,instagram,twitter} = req.body;

            const promoterServices = new PromoterServices();

            promoterServices.promoter_nit = promoter_nit;
            promoterServices.name = name;
            promoterServices.address = address;
            promoterServices.phone = phone;
            promoterServices.email = email;
            promoterServices.password = password;
            promoterServices.information = information;
            promoterServices.facebook = facebook;
            promoterServices.instagram = instagram;
            promoterServices.twitter = twitter;
            const savePromoter = await promoterServices.savePromoter();

            res.json(savePromoter);
        }
        catch(error){
            console.log('error saving promoters in controllers') 
        }
        
    } 
    async updatePromoter(req,res){

        const {error} = schemaUpdatePromoter.validate(req.body)
        if(error){
             return res.status(400).json(
                {error: error.details[0].message}
            )  
        }
 
        try{
            const {promoter_nit,name,address,phone,email,password,information,facebook,instagram,twitter} = req.body;

            const promoterServices = new PromoterServices();

            promoterServices.promoter_nit = promoter_nit;
            promoterServices.name = name;
            promoterServices.address = address;
            promoterServices.phone = phone;
            promoterServices.email = email;
            promoterServices.password = password;
            promoterServices.information = information;
            promoterServices.facebook = facebook;
            promoterServices.instagram = instagram;
            promoterServices.twitter = twitter;
            const updatePromoter = await promoterServices.updatePromoter();

            res.json(updatePromoter);
        }
        catch(error){
            console.log('error updating promoter in controller');
        }
    }
    async deletePromoter(req,res){
        const {error} = schemaDeletePromoter.validate(req.body)
        if(error){
             return res.status(400).json(
                {error: error.details[0].message}
            )  
        }

        try{
            const {promoter_nit} = req.params 

            const promoterServices = new PromoterServices();

            promoterServices.promoter_nit = promoter_nit;

            const deletePromoter = promoterServices.deletePromoter();

            res.json(deletePromoter);
        }
        catch(error){console.log('error deleting promoter in controller')}
    }
    async LoginUser(req,res){
        try{
            const {email,password} = req.body;
            let clientServices = new ClientServices();
            clientServices.email = email;
            clientServices.password = password;
            let loginUser = await clientServices.loginUser(); 
            res.json(loginUser);
        }
        catch(error){console.log({message:'error login user in controller',
                            error: error.message})}
    }

}

export default PromoterControllers;
