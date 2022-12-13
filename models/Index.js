import {Client} from './Client.js';
import {Promoter} from './Promoter.js';
import {Quality} from './Quality.js';
import {Event} from './Event.js';
import {Ticket} from './Ticket.js';
//import {Calidad_Ticket} from './Calidad_Ticket.js'

//associations ticket

//Ticket.belongsTo(Event,{as:'Ticket_event',foreignKey: 'event_cod'})
//Event.hasMany(Ticket,{foreignKey: 'event_cod'})

Ticket.belongsTo(Client,{as:'Ticket_client',foreignKey: 'client_id'})
Client.hasMany(Ticket,{foreignKey: 'client_id'})

Ticket.belongsTo(Quality,{as:'Ticket_quality',foreignKey: 'quality_cod'})
Quality.hasMany(Ticket,{foreignKey: 'quality_cod'})

//---------------associations event
Event.belongsTo(Promoter,{as:'event_promoter',foreignKey: 'promoter_nit'})
Promoter.hasMany(Event,{foreignKey: 'promoter_nit'})

Quality.belongsTo(Event,{as:'quality_event',foreignKey:'event_cod'})
Event.hasMany(Quality,{foreignKey:'event_cod'})

//---------------associations  


Client
Promoter
Quality
Ticket

export {Client,Promoter,Quality,Event,Ticket}
