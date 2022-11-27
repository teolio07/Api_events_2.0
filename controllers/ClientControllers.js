import Joi from 'joi'

import ClientServices from '../services/ClientServices.js';


const schemaUpdateClient = Joi.object({
    client_id: Joi.string().min(1).max(255).required(),    
    name: Joi.string().min(1).max(255).required(),
    phone: Joi.string().min(1).max(255).required(),
    email: Joi.string().min(1).max(255).required().email(),
    image: Joi.string().min(1).max(255).required(),
    password: Joi.string().min(1).max(255).required()

})

const schemaSaveClient = Joi.object({
    client_id: Joi.string().min(1).max(255).required(),    
    name: Joi.string().min(1).max(255).required(),
    phone: Joi.string().min(1).max(255).required(),
    email: Joi.string().min(1).max(255).required().email(),
    image: Joi.string().min(1).max(255).required(),
    password: Joi.string().min(1).max(255).required()

})

const schemaDeleteClient = Joi.object({
     client_id: Joi.string().min(1).max(255).required(),    

})



const schemaGetClient = Joi.object({
     client_id: Joi.string().min(1).max(255).required(),    

})

const schemaLoginUser = Joi.object({
    email: Joi.string().min(1).max(255).required().email(),
    password: Joi.string().min(1).max(255).required()
   
   
})

class ClientControllers {
    
    async getClients(req,res){
        try{
            const clientServices = new ClientServices();
            let clients = await clientServices.getClients(); 
            res.json(clients);
       } catch(error){
            console.log(error)
            
        }
    
    }
    async getClient(req,res){
        const {error} = schemaGetClient.validate(req.params);
        if(error){
            return res.status(400).json(
                {error: error.details[0].message}
            )   
        }
        try{
            const{client_id } = req.params;

            const clientServices = new ClientServices();
            clientServices.client_id = client_id;

            let client = await clientServices.getClient()
            res.json(client); 
        } catch(error){
            console.log('Error getting client in the controller' + error);
            
        }
    
    }

    async saveClient(req,res){
        const {error} = schemaSaveClient.validate(req.body)
        if(error){
            return res.status(400).json(
                {error: error.details[0].message}
            )
        }
        try{
            const{client_id,name,email,phone,image,password } = req.body;
            let clientServices = new ClientServices();
            clientServices.client_id = client_id;
            clientServices.name = name;
            clientServices.email = email;
            clientServices.phone = phone;
            clientServices.image = image;
            clientServices.password = password;

            const saveClient =await clientServices.saveClient()
            res.json(saveClient); 
        } catch(error){
            console.log('Error saving client in controller' + error);
            
        }
    
    }

    async  updateClient(req,res){
        const {error} = schemaUpdateClient.validate(req.body) 
        if(error){
             return res.status(400).json(
                {error: error.details[0].message}
            )
        }
        try{
            const{client_id,name,email,phone,image,password } = req.body;
            let clientServices = new ClientServices();
            clientServices.client_id = client_id;
            clientServices.name = name;
            clientServices.email = email;
            clientServices.phone = phone;
            clientServices.image = image;
            clientServices.password = password;
           const updateClient = await clientServices.updateClient()
            res.json(updateClient);
       } catch(error){
            console.log('Promise rejection error' + error);
            
        }
    
    }
   async deleteClient(req,res){
        const { error } = schemaDeleteClient.validate(req.params);
        if(error){
            return res.status(400).json(
                {error: error.details[0].message}
            )

        }
        try{
            const {client_id } = req.params;
            const clientServices = new ClientServices();
            clientServices.client_id = client_id;
            const deleteClient = await clientServices.deleteClient();
            res.json(deleteClient);
        }
        catch(error){
            console.log('Promise rejection error' + error);
            
        }
    
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

export default ClientControllers; 

