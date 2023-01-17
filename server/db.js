const Pool = require('pg').Pool;
const pool = new Pool({
    user:"Rkss",
    password:"SivaRaj_07",
    host:"first-react-procject.coafalvmzodt.ap-southeast-1.rds.amazonaws.com",
    port:5432,
    database:"pern"
});
module.exports = pool;
