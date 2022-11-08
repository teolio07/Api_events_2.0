import ClientServices from '../services/ClientServices.js';
class ClientControllers {
    async getClients(req,res){
        try{
            const clientServices = new ClientServices();
            let clients = await clientServices.getClients(); 
            res.json(clients);
       } catch(error){
            console.log('Promise rejection error' + error)
            
        }
    
    }
   async getClient(req,res){
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
        try{
            const{client_id,name,address,phone } = req.body;
            let clientServices = new ClientServices();
            clientServices.client_id = client_id;
            clientServices.name = name;
            clientServices.address = address;
            clientServices.phone = phone;
            const saveClient =await clientServices.saveClient()
            res.json(saveClient); 
        } catch(error){
            console.log('Error saving client in controller' + error);
            
        }
    
    }

    async  updateClient(req,res){
        try{
            const{client_id,name,address,phone } = req.body;
            let clientServices = new ClientServices();
            clientServices.client_id = client_id;
            clientServices.name = name;
            clientServices.address = address;
            clientServices.phone = phone;
            const updateClient = await clientServices.updateClient()
            res.json(updateClient);
       } catch(error){
            console.log('Promise rejection error' + error);
            
        }
    
    }
   async deleteClient(req,res){
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
}

export default ClientControllers; 

