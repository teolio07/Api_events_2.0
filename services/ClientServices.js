import {Client} from '../models/Client.js';
import Encrypt from './Encrypt.js';
import { Login } from './Login.js';
import boom from '@hapi/boom'; 

class ClientServices{
    constructor(client_id,name,email,phone,image,password){
        this.client_id = client_id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.image = image;
        this.password = password;
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
                email: this.email,
                phone: this.phone,
                image:this.image,
                password: await Encrypt(this.password)


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
                name: this.name,
                email: this.email,
                phone: this.phone,
                image:this.image,
                password: this.password


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

    async loginUser(){
        try{
            let user = {email: this.email, password: this.password,user_type: "client"}
            let client = await Login(user);    

            return client;
        } 
        catch(error){console.log({messsage:'Error login user  client in services',
                            error: error.message
        })}

    }

}

export default ClientServices;
