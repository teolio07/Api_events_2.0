import {  DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";

export const Ticket = sequelize.define("tickets",{
    ticket_cod: {
                primaryKey: true,
                type: DataTypes.STRING,
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



