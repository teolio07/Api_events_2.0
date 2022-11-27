import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import {Ticket} from './Ticket.js'

export const Event = sequelize.define("events", {
        event_cod: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false

        },
        event_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        event_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        event_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        event_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publication_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        promoter_nit: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
 
    });
/*
Event.hasMany(Ticket,{
    foreignKey: 'event_cod',
    source: 'event_cod'
})
*/
