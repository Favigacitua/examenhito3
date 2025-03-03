import pool from "../config/dbConnection.js";

// Obtener todos los usuarios
async function getUsers() {
  const consulta = 'SELECT * FROM usuario';
  const { rows } = await pool.query(consulta);
  console.log(rows);
  return rows;
}

// Crear un nuevo usuario
async function postUsers(nombre, apellido, email, password) {
  const consulta = 'INSERT INTO usuario (nombre, apellido, email, password) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [nombre, apellido, email, password];
  const { rows } = await pool.query(consulta, values);
  console.log('Usuario creado:', rows[0]);
  return rows;
}

export {
  getUsers,
  postUsers
};
