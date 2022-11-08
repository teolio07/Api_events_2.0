import {Quality} from '../models/Quality.js';
class QualityServices{
    constructor(quality_cod,quality_type){
        this.quality_cod = quality_cod;
        this.quality_type = quality_type;
    }
    async getQualities(){
        try{
            const qualities = await Quality.findAll() 
            return qualities; 
        }
        catch(error){cosole.log('error getting qualities in services')}
    }
    async getQuality(){
        try{
            let g_quality_cod = this.quality_cod;
            const quality = await Quality.findOne({where:{quality_cod:g_quality_cod}});
            return quality;
        }
        catch(error){console.log('error getting quality in services')}
    }
    async saveQuality(){
        try{
            const quality = {quality_cod:this.quality_cod,quality_type:this.quality_type}
            const saveQuality = await Quality.create(quality);
            return saveQuality
        }
        catch(error){
            console.log('error saving quality in servicesj')
        }
    }
    async updateQuality(){
        try{
            let u_quality_cod = this.quality_cod
            const quality = {quality_type:this.quality_type}
            const updateQuality = await Quality.update(quality,{where:{quality_cod:u_quality_cod}});
            return updateQuality       
        }
        catch(error){
            console.log('error updating quality in services')
        }
    }
    async deleteQuality(){
        try{
            let d_quality_cod = this.quality_cod;
            const quality = await Quality.destroy({where:{quality_cod:d_quality_cod}});
            return quality;
        }
        catch(error){
            console.log('error deleting quality in services');
        }

    }
}

export default QualityServices;