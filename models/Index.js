import {Client} from './Client.js';
import {Promoter} from './Promoter.js';
import {Quality} from './Quality.js';
import {Event} from './Event.js';
import {Ticket} from './Ticket.js';

Ticket.belongsTo(Event,{foreignKey: 'event_cod'})
Event.hasMany(Ticket,{foreignKey: 'event_cod'})



Client
Promoter
Quality
Ticket

export {Client,Promoter,Quality,Event,Ticket}
