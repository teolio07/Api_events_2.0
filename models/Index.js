import {Client} from './Client.js';
import {Promoter} from './Promoter.js';
import {Quality} from './Quality.js';
import {Event} from './Event.js';
//import {Ticket} from './Ticket.js';
import {Calidad_Ticket} from './Calidad_Ticket.js'

//associations ticket

Calidad_Ticket.belongsTo(Event,{foreignKey: 'event_cod'})
Event.hasMany(Calidad_Ticket,{foreignKey: 'event_cod'})

Calidad_Ticket.belongsTo(Client,{foreignKey: 'client_id'})
Client.hasMany(Calidad_Ticket,{foreignKey: 'client_id'})

Calidad_Ticket.belongsTo(Quality,{foreignKey: 'quality_cod'})
Quality.hasMany(Calidad_Ticket,{foreignKey: 'quality_cod'})

//---------------associations event
Event.belongsTo(Promoter,{foreignKey: 'promoter_nit'})
Promoter.hasMany(Event,{foreignKey: 'promoter_nit'})

//---------------associations  


Client
Promoter
Quality
Calidad_Ticket

export {Client,Promoter,Quality,Event,Calidad_Ticket}
