import express from "express";
import pool from "./config/dbConnection.js"
import{ router as userRouter} from "./routes/users.js";
import { viajesRouter } from "./routes/viajes.js";
import { reseñasRouter } from "./routes/reseñas.js";


const app = express()
const port = 3000;

app.use(express.json())

app.use('/api', viajesRouter)
app.use('/api',reseñasRouter )


console.log("Rutas cargadas correctamente")

app.listen(port, ()=>console.log(`El servidor esta corriendo en el puerto ${port}`))