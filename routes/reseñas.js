import {  Router } from "express";
import { schemaValidation } from "../middlewares/schemaValidation.js";
import { request } from "../schema/postuserSchema.js";
import { getMisReseñasController, getReseñasController, postReseñasController } from "../controllers/reseñasController.js";


const reseñasRouter = Router()

reseñasRouter.get('/reseñas', getReseñasController)
reseñasRouter.get('/mis_reseñas', getMisReseñasController)
reseñasRouter.post ('/mis_reseñas',[schemaValidation(request.payload.misreseñas.post.request)], postReseñasController)


export {
    reseñasRouter
}