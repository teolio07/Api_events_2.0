import Sequelize from 'sequelize';


/*
const db_name = 'b2lq1uoz9pke3mi4m9sw';
const username = 'u93ovu0rem0kex58';
const password = 'Qm92ZSBTRasDTFvHna7B';
const host = 'b2lq1uoz9pke3mi4m9sw-mysql.services.clever-cloud.com';
const dialect = 'mysql'
*/
const db_name = 'DB_EVENT';
const username = 'root';
const password = 'mono19teo';
const host = 'localhost';
const dialect = 'mysql'


export const sequelize = new Sequelize(db_name,username,password,{host: host,dialect: dialect})

