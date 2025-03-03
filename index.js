import express from 'express';
import cors from 'cors';
import { router as userRouter } from './routes/users.js';

const app = express();
const port = 3000;

app.use(cors());  // Habilita CORS para todas las rutas
app.use(express.json());

app.use('/api', userRouter);

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
