import { DataTypes } from 'sequelize';
import {sequelize} from '../database/database.js';
export const Promoter =  sequelize.define("promoters", {
            promoter_nit: {
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
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        information: {
            type: DataTypes.STRING,
            allowNull: false
        },
        facebook: {
            type: DataTypes.STRING,
            allowNull: true
        },
        instagram: {
            type: DataTypes.STRING,
            allowNull: true
        },
        twitter: {
            type: DataTypes.STRING,
            allowNull: true
        },




    });

