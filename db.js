const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'todoapp',
  password: '123',
  port: 5432,
})