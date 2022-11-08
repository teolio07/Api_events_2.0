import {Client} from '../models/Client.js';
class ClientServices{
    constructor(client_id,name,address,phone){
        this.client_id = client_id;
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    async getClients(){
        try{
            const clients = await Client.findAll();
            return clients;

        }
        catch(error){console.log('Error in services getting clients')}
    }

    async getClient(){
        try{
            let g_client_id = this.client_id;
            const client = await Client.findOne({where:{client_id :g_client_id }})     
            return client;
        }
        catch(error){
            console.log('Error getting client in services');
        }
    }

    async saveClient(){
        try{
            let client = {
                client_id : this.client_id,
                name: this.name,
                address: this.address,
                phone: this.phone
            }
            const saveClient = await Client.create(client);
            return saveClient;
        }
        catch(error){
            console.log('Error saving client in services')
        }
    }
    
    async updateClient(){
        try{
            let u_client_id = this.client_id;
            let client = {
                client_id : this.client_id,
                name: this.name,
                address: this.address,
                phone: this.phone
            }
            const updateClient = await Client.update(client,{where:{client_id: u_client_id}}); 
            return updateClient;
 
        }
        catch(error){
            console.log(error)
        }
    }
    
    async deleteClient(){
        try{
            let d_client_id = this.client_id;
            const deleteClient = await Client.destroy({where: {client_id: d_client_id}}) 
            return deleteClient;
        }catch(error){console.log('error deleting client in services')}
    }

}

export default ClientServices;
