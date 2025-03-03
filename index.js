
import express from 'express';
import cors from 'cors';
import { router as userRouter } from './routes/users.js';
import { viajesRouter } from "./routes/viajes.js";
import { reseñasRouter } from "./routes/reseñas.js";

const app = express();
const port = 3000;

app.use(cors());  // Habilita CORS para todas las rutas
app.use(express.json());

app.use('/api', userRouter);
app.use('/api', viajesRouter)
app.use('/api',reseñasRouter )

console.log("Rutas cargadas correctamente")
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));













