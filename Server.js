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
import './models/Quality.js';
import './models/Promoter.js';
import './models/Client.js';
import './models/Event.js';
import './models/Ticket.js';


/*-------------------running api---------*/
async function main(){
    await sequelize.sync({force: false});
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
