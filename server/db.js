const Pool = require('pg').Pool;
const pool = new Pool({
    user:"Rkss",
    password:"SivaRaj_009",
    host:"first-react-task.coafalvmzodt.ap-southeast-1.rds.amazonaws.com",
    port:5432,
    database:"first_react_task"
});
module.exports = pool;
