import Fastify from 'fastify';
import { userRoutes, employeeRoutes } from './router';

class App {
  constructor() {
    this.app = Fastify({ logger: true });
    this.routes();
  }

  routes() {
    this.app.get('/ping', (_, res) => {
      res.send({ ok: true, msg: 'pong' });
    });
    this.app.get('/', async () => ({ ok: true, msg: '/' }));
    this.app.register(userRoutes, { prefix: '/user' });
    this.app.register(employeeRoutes, { prefix: '/employee' });
    this.app.all('/user2', async () => ({ ok: true, msg: 'user' }));
  }
}

export default App;
