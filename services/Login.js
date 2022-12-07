import {Client} from '../models/Client.js';
import {Promoter} from '../models/Promoter.js';

import boom from '@hapi/boom'; 
import bcrypt from 'bcrypt';

export async function Login(user){

    //validate if the email exists                                                                                                                        
    let validateEmail;
    switch(user.user_type){
        case 'promoter':
            validateEmail = await Promoter.findOne({where: {email: user.email}});                                                                                                
            break;
        case 'client':
            validateEmail = await Client.findOne({where: {email: user.email}});                                                                                                
            break;

    }
    console.log(validateEmail)
    if(!validateEmail){return (boom.badData('Eeemail and password are not valid '))    
}

    //validate if the password belong to the user                                                                                                         
    let validatePassword = await bcrypt.compare(user.password, validateEmail.dataValues.password);                                                                        
    if (!validatePassword) return (boom.badData('Email and password are not valid '))    

    return validateEmail;
}
