import bcrypt from 'bcrypt'


export default async function Encrypt(password){ 
    try{
        let salt = await bcrypt.genSalt(10);                                                                                                                      
        password = await bcrypt.hash(password, salt);  

        return password;
    }
    catch(error){return {error: 'error in Encrypting in services'+ error.message}}
}

