const Sequelize = require('sequelize');
const sequelize = new Sequelize('jassis_core_database', 'futuresky', 'f0r3v3r4l0n3@1403', {
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true
        }
    },
    host: 'jassis.database.windows.net',
    port: 1433,
})
module.exports = sequelize;