/*----------------Express--------------*/
import express from 'express';
const app = express();
/*---------------enviroment variables -------------*/
import * as dotenv from 'dotenv';
dotenv.config();

/*-----------------database-------------*/
import {sequelize} from './database/database.js';

/*----------------port-------------------*/
const port = process.env.PORT || 3002;

/*--------------Middlewares----------*/
app.use(express.json());

/*-----------------router-----------------*/
import apiRouter from './routes/index.js'
apiRouter(app);
/*---------------------models-------------*/
import './models/Index.js'

/*-------------------running api---------*/
async function main(){
    try{
        await sequelize.sync({force: true});
        await sequelize.authenticate()
            .then(() => {
                console.log(`Connection has been established successfully`);
            }).catch((error) => {
                console.log('Unable to connect to the database: '+ error);
            });
            app.listen(port,(err)=>{
                if(err){ console.log('error starting the server')}
                else{console.log('Server running')}
            })
    }
    catch(error){
        console.log('Error connecting to database'+ error.message)
    }
}

main();
