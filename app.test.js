import supertest from 'supertest';
import App from './app';

describe('App', () => {
  const fastify = new App().app;

  afterAll(() => {
    fastify.close();
  });

  it('app get /', async () => {
    await fastify.ready();

    const response = await supertest(fastify.server)
      .get('/');

    const expected = { ok: true, msg: '/' };

    expect(response.body).toEqual(expected);
  });

  it('app get /ping', async () => {
    await fastify.ready();

    const response = await supertest(fastify.server)
      .get('/ping');

    const expected = { ok: true, msg: 'pong' };

    expect(response.body).toEqual(expected);
  });
});
