import {Promoter} from '../models/Promoter.js';
class PromoterServices{

    constructor(promoter_nit,name,address,phone,email,password,information,facebook,instagram,twitter){
        this.promoter_nit = promoter_nit;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.information = information;
        this.facebook = facebook;
        this.instagram = instagram;
        this.twitter = twitter;

    }
    async getPromoters(){
        try{
            const getPromoters = await Promoter.findAll();
            return getPromoters;
        }
        catch(error){console.log('Error in services getting promoters ' +error.message)}
    }
    async getPromoter(){
        try{
            let g_promoter_nit = this.promoter_nit;
            
            const getPromoter = await Promoter.findOne({where: {promoter_nit:g_promoter_nit}});
            return getPromoter;
        }
        catch(error){console.log('Error in services getting promoter ' +error.message)}
    }
    async savePromoter(){
         try{
            let promoter = {promoter_nit: this.promoter_nit,
                name:this.name,
                address:this.address,
                phone:this.phone,
                email: this.email,
                password:this.password,
                information: this.information,
                facebook:this.facebook,
                instagram:this.instagram,
                twitter:this.twitter} 
            const savePromoter = await Promoter.create(promoter); 
            return savePromoter; 
        }
        catch(error){
            console.log('error saving promoter in services '+error.message);
        }       
    }

    async updatePromoter(){
        try{
            let u_promoter_id = this.promoter_nit;
            let promoter = {promoter_nit: this.promoter_nit,
                name:this.name,
                address:this.address,
                phone:this.phone,
                email: this.email,
                password:this.password,
                information: this.information,
                facebook:this.facebook,
                instagram:this.instagram,
                twitter:this.twitter} 
            const updatePromoter = await Promoter.update(promoter,{where: {promoter_nit: u_promoter_id}}) 
            return updatePromoter; 
        }
        catch(error){
            console.log('error updating promoter in services '+error.message);
        }
    }
     async deletePromoter(){
        try{
            let d_promoter_nit = this.promoter_nit;
            const deletePromoter = await Promoter.destroy({where: {promoter_nit:d_promoter_nit}});
            return deletePromoter;
        }
        catch(error){console.log('Error deleting promoter in services '+error.message)}
    }
   
}

export default PromoterServices;
