import {  Router } from "express";
import { getUsers } from "../helpers/usersHelper.js";
import { getUserController, postUserController } from "../controllers/users.js";
import { schemaValidation } from "../middlewares/schemaValidation.js";
import { request } from "../schema/postuserSchema.js";


const router = Router()

router.get('/users', getUserController ) 
router.post('/users',[schemaValidation(request.payload)], postUserController ) 

export { router };