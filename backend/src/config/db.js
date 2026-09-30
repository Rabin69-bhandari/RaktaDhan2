import pkg from 'pg'

const  {Pool} = pkg

const pool = new Pool({
    host : 'localhost',
    port : 5432,
    user: "postgres",
    password: "Rabin123",
    database: "BloodManagementPortal",
})

export default pool