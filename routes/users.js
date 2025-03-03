import { Router } from "express";
import { getUsersController, postUsersController } from "../controllers/users.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { request } from "../schemas/postUsersSchema.js";
import authMiddleware from "../middlewares/authMiddleware.js"; // Importamos el middleware de autenticación

const router = Router();

// Ruta para obtener todos los usuarios (protegida por autenticación)
router.get('/users', authMiddleware, getUsersController);

// Ruta para crear un usuario (sin autenticación)
router.post('/users', [schemaValidator(request.payload)], postUsersController);

export { router };
