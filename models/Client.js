import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js'


export const Client = sequelize.define("clients", {
        client_id: {
            type: DataTypes.STRING,
            allowNull: false,
            primarykey: true,

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
