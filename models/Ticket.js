import {  DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";

export const Ticket = sequelize.define("tickets",{
    ticket_cod: {
                primarykey: true,
                type: DataTypes.STRING,
                allowNull: false 
            },
    price: {
                type: DataTypes.FLOAT,
                allowNull: false 
            },
 
    quality_cod: {
                type: DataTypes.STRING,
                allowNull: false 
            },
    client_id: {
                type: DataTypes.STRING,
                allowNull: false 
            }

}) 


