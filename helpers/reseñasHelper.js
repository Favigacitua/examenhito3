import pool from "../config/dbConnection.js"

async function getReseñas(id) {
    const consulta = 'SELECT * FROM reseñas WHERE id = $1'
    const { rows } = await pool.query(consulta, [id])
    return rows[0] || null
}

async function getMisReseñas(token) {
    const consulta = 'SELECT id FROM usuarios WHERE token = $1'
    const { rows: usuarioRows } = await pool.query(consulta, [token])
    if (usuarioRows.length === 0) {
        throw new Error("Token inválido o usuario no encontrado");
    }

    const usuarioId = usuarioRows[0].id;

    const consultaReseñas = 'SELECT * FROM mis_reseñas WHERE id_usuario = $1';
    const { rows: reseñasRows } = await pool.query(consultaReseñas, [usuarioId]);

    return reseñasRows; 
}

async function postReseñas(id_usuario, id_viaje, valoracion, descripcion) {
     const consulta = 'INSERT INTO mis_reseñas (id_usuario, id_viaje, valoracion, descripcion) VALUES($1,$2,$3,$4) RETURNING *'
     const values = [id_usuario, id_viaje, valoracion, descripcion]
     const { rows } = await pool.query(consulta, values)
    return { rows }
}


export {
    getReseñas,
    getMisReseñas,
    postReseñas
}