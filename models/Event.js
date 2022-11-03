import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';


export const Event = sequelize.define("events", {
        event_cod: {
            type: DataTypes.STRING,
            allowNull: false,
            primarykey: true,

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
        common_price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        common_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        vip_price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        vip_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        publication_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        promoter_nit: {
            type: DataTypes.DATE,
            allowNull: false
        }
        
 
    });
