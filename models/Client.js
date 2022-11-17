import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js'


export const Client = sequelize.define("clients", {
        client_id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

