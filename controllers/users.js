import { getUsers, postUsers } from "../helpers/usersHelper.js";
import jwt from 'jsonwebtoken';
import { secretKey } from '../secretKey.js'; // Asegúrate de tener este archivo con la clave secreta

// Controlador para obtener los usuarios
const getUsersController = async (req, res) => {
  try {
    const { rows } = await getUsers();
    res.json({
      users: rows,
    });
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

// Controlador para crear un nuevo usuario
const postUsersController = async (req, res) => {
  try {
    const { nombre, apellido, email, password } = req.body;
    const { rows } = await postUsers(nombre, apellido, email, password);
    const user = rows[0];

    // Generar un token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      secretKey,
      { expiresIn: '1h' } // Expiración del token
    );

    res.status(201).json({
      token,
      user: {
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};

export { getUsersController, postUsersController };
