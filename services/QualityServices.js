import {Quality} from '../models/Quality.js';
import { v4 as uuid } from 'uuid';

class QualityServices{
    constructor(quality_cod,quality_type,event_cod,price){
        this.quality_cod = quality_cod;
        this.quality_type = quality_type;
        this.price = price;
        this.event_cod = event_cod
    }
    async getQualities(){
        try{
            const qualities = await Quality.findAll({include:["quality_event"]}) 
            return qualities; 
        }
        catch(error){console.log({message:'error getting qualities in services ',error: error})}
    }
    async getQuality(){
        try{
            let g_quality_cod = this.quality_cod;
            const quality = await Quality.findOne({where:{quality_cod:g_quality_cod}});
            return quality;
        }
        catch(error){console.log('error getting quality in services ' +error.message)}
    }
    async saveQuality(){
        try{
            const quality = {quality_cod:uuid(),quality_type:this.quality_type,price:this.price,event_cod:this.event_cod}
            const saveQuality = await Quality.create(quality);
            return saveQuality
        }
        catch(error){
            console.log('error saving quality in servicesj'+error.message)
        }
    }
    async updateQuality(){
        try{
            let u_quality_cod = this.quality_cod
            const quality = {quality_cod:this.quality_cod,quality_type:this.quality_type,price:this.price,event_cod:this.event_cod}
            const updateQuality = await Quality.update(quality,{where:{quality_cod:u_quality_cod}});
            return updateQuality       
        }
        catch(error){
            console.log('error updating quality in services '+error.message)
        }
    }
    async deleteQuality(){
        try{
            let d_quality_cod = this.quality_cod;
            const quality = await Quality.destroy({where:{quality_cod:d_quality_cod}});
            return quality;
        }
        catch(error){
            console.log('error deleting quality in services '+error.message);
        }

    }
}

export default QualityServices;
