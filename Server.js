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



/*-----------------router-----------------*/


/*---------------------models-------------*/
import './models/Quality.js';
import './models/Promoter.js';
import './models/Client.js';
import './models/Event.js';

/*-------------------running api---------*/
async function main(){
    await sequelize.sync();
    await sequelize.authenticate()
        .then(() => {
            console.log(`Connection has been established successfully`);
        }).catch((error) => {
            console.error('Unable to connect to the database: ', error);
        });
    app.listen(port,(err)=>{
    if(err){ console.log('error starting the server')}
    else{console.log('Server running')}
    })
}

main();
