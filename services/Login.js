import {Client} from '../models/Client.js';
import boom from '@hapi/boom'; 
export async function Login(user){

    //validate if the email exists                                                                                                                        
    let validateEmail = await Client.findOne({where: {client_id: user.email}});                                                                                                
    if(!validateEmail) return (boom.badData('Email and password are not valid '))                                                                                                                                                                                                                                  
    //validate if the password belong to the user                                                                                                         
    let validatePassword = await bcrypt.compare(password, validateEmail.password);                                                                        
    if (!validatePassword) return (boom.badData('Email and password are not valid '))    
}
