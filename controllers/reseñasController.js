import pool from "../config/dbConnection.js"; 
import { getReseñas, getMisReseñas, postReseñas } from "../helpers/reseñasHelper.js";

const getReseñasController = async (req, res) =>{
    try {
        const { id } = req.params;  
        if (!id) {
            return res.status(400).json({ error: "ID de reseña requerido" });
        }

        const reseñas = await getReseñas(id);  

        if (!reseñas) {
            return res.status(404).json({ error: "Reseña no encontrado" });
        }

        res.json({ reseña });  

    } catch (error) {
        console.error("Error al obtener la reseña:", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
}

const getMisReseñasController = async (req, res)=>{
    try {
        const token = req.headers.authorization; 
        if (!token) {
            return res.status(401).json({ error: "Token de autenticación requerido" });
        }
        const reseñas = await getMisReseñas(token);
        res.json({ reseñas });

    } catch (error) {
        console.error("Error al obtener reseñas:", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
}

const postReseñasController = async (req,res) =>{
    try {

        const token = req.headers.authorization; 
        if (!token) {
            return res.status(401).json({ error: "Token de autenticación requerido" });
        }
        const {id_viaje, valoracion, descripcion} = req.body
        const consultaUsuario = 'SELECT id FROM usuarios WHERE token = $1';
        const { rows: usuarioRows } = await pool.query(consultaUsuario, [token]);
        if (usuarioRows.length === 0) {
            return res.status(401).json({ error: "Token inválido o usuario no encontrado" });
        }
        const id_usuario = usuarioRows[0].id;

        const nuevaReseña = await postReseñas(id_usuario, id_viaje, valoracion, descripcion);

        return res.status(201).json({ message: "Reseña agregada", reseña: nuevaReseña.rows[0] });


    } catch (error) {
        console.error("Error al agregar reseña:", error);
        return res.status(500).json({ error: "Error en el servidor" });
    }

}

export {
    getMisReseñasController,
    getReseñasController,
    postReseñasController
}