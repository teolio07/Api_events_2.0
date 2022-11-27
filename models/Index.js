import {Client} from './Client.js';
import {Promoter} from './Promoter.js';
import {Quality} from './Quality.js';
import {Event} from './Event.js';
import {Ticket} from './Ticket.js';

//associations ticket

Ticket.belongsTo(Event,{foreignKey: 'event_cod'})
Event.hasMany(Ticket,{foreignKey: 'event_cod'})

Ticket.belongsTo(Client,{foreignKey: 'client_id'})
Client.hasMany(Ticket,{foreignKey: 'client_id'})

Ticket.belongsTo(Quality,{foreignKey: 'quality_cod'})
Quality.hasMany(Ticket,{foreignKey: 'quality_cod'})

//---------------associations event
Event.belongsTo(Promoter,{foreignKey: 'promoter_nit'})
Promoter.hasMany(Event,{foreignKey: 'promoter_nit'})

//---------------associations  

Client
Promoter
Quality
Ticket

export {Client,Promoter,Quality,Event,Ticket}
