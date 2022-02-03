import Fastify from 'fastify';

class App {
  constructor() {
    this.app = Fastify({ logger: true });
    this.routes();
  }

  routes() {
    this.app.get('/ping', (req, res) => {
      res.send({ ok: true, msg: 'pong' });
    });
    this.app.get('/', async () => ({ ok: true, msg: '/' }));
  }
}

export default App;
