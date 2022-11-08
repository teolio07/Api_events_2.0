import {Promoter} from '../models/Promoter.js';
class PromoterServices{

    constructor(promoter_nit,name,address,phone){
        this.promoter_nit = promoter_nit;
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    async getPromoters(){
        try{
            const getPromoters = await Promoter.findAll();
            return getPromoters;
        }
        catch(error){console.log(error)}
    }
    async getPromoter(){
        try{
            let g_promoter_nit = this.promoter_nit;
            
            const getPromoter = await Promoter.findOne({where: {promoter_nit:g_promoter_nit}});
            return getPromoter;
        }
        catch(error){console.log(error)}
    }
    async savePromoter(){
         try{
            let promoter = {promoter_nit: this.promoter_nit,name:this.name,address:this.address,phone:this.phone} 
            const savePromoter = await Promoter.create(promoter); 
            return savePromoter; 
        }
        catch(error){
            console.log('error saving promoter in services');
        }       
    }

    async updatePromoter(){
        try{
            let u_promoter_id = this.promoter_nit;
            let promoter = {name:this.name,address:this.address,phone:this.phone} 
            const updatePromoter = await Promoter.update(promoter,{where: {promoter_nit: u_promoter_id}}) 
            return updatePromoter; 
        }
        catch(error){
            console.log('error updating promoter in services');
        }
    }
     async deletePromoter(){
        try{
            let d_promoter_nit = this.promoter_nit;
            const deletePromoter = await Promoter.destroy({where: {promoters_nit:d_promoter_nit}});
            return deletePromoter;
        }
        catch(error){console.log('Error getting promoters')}
    }
   
}

export default PromoterServices;
