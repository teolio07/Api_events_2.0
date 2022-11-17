import {Quality} from '../models/Quality.js';
class QualityServices{
    constructor(quality_cod,quality_type,event_cod,price){
        this.quality_cod = quality_cod;
        this.quality_type = quality_type;
        this.event_cod = event_cod;
        this.price = price
    }
    async getQualities(){
        try{
            const qualities = await Quality.findAll() 
            return qualities; 
        }
        catch(error){cosole.log('error getting qualities in services '+error.message)}
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
            const quality = {quality_cod:this.quality_cod,quality_type:this.quality_type,event_cod:this.event_cod,price:this.price}
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
            const quality = {quality_cod:this.quality_cod,quality_type:this.quality_type,event_cod:this.event_cod,price:this.price}
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
