import { DataTypes } from 'sequelize';
import {sequelize} from '../database/database.js';

 export const Quality = sequelize.define("qualities", {
    quality_cod: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false
    },
    quality_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },    
    event_cod: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
