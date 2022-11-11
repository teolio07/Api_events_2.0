import PromoterServices from '../services/PromoterServices.js';

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
    async updatePromoter(req,res){
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
        try{
            const {promoter_nit} = req.params 

            const promoterServices = new PromoterServices();

            promoterServices.promoter_nit = promoter_nit;

            const deletePromoter = promoterServices.deletePromoter();

            res.json(deletePromoter);
        }
        catch(error){console.log('error deleting promoter in controller')}
    }
}

export default PromoterControllers;
