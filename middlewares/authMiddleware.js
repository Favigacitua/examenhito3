import jwt from 'jsonwebtoken';
import { secretKey} from '../secretKey.js';

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Se requiere autenticación' });
  }

  // El token viene precedido por "Bearer", así que tomamos solo el token
  const tokenWithoutBearer = token.split(' ')[1];

  // Verificar el token
  jwt.verify(tokenWithoutBearer, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }
    req.user = decoded; // Guardamos los datos decodificados del usuario en el request
    next(); // Continuar al siguiente middleware o controlador
  });
};

export default authMiddleware;
