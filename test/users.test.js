import request from 'supertest';
import app from '../index.js'; // Asegúrate de importar tu aplicación

describe('GET /api/users', () => {
  it('Debería devolver una lista de usuarios', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('users');
  });
});

describe('POST /api/users', () => {
  it('Debería crear un nuevo usuario', async () => {
    const res = await request(app).post('/api/users').send({
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'juan@example.com',
      password: 'password123',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('user');
  });
});
