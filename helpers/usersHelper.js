import pool from "../config/dbConnection.js"

async function getUsers() {
    const consulta = 'SELECT * FROM usuario' 
    const{ rows } = await pool.query(consulta)
    return {rows}
 }



 async function postUsers() {
    const consulta = 'INSERT INTO usuario (nombre, apellido, email, password) VALUES($1,$2,$3,$4) RETURNING *'
    const values = [nombre, apellido, email, password]

    const { rows } = await pool.query(consulta, values)
    return { rows }


 }
  export {
    getUsers,
    postUsers

  }