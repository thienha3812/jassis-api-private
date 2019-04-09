const Sequelize = require('sequelize');
const sequelize = new Sequelize('jassis_core_database','jteam','f0r3v3r4l0n3@1403',{
    dialect:'mssql',
   host:'jcenter.sytes.net',
   port:1433,
   encrypt:false,
  
});
module.exports = sequelize;