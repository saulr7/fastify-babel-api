const handlerV2 = (req, res) => {
  res.send({ ok: true, msg: 'It works fuckers' });
};

const handlerV3 = (req, res) => {
  const { id } = req.params;
  res.send({ ok: true, msg: `It works fuckers 3${id}` });
};

const userRoutes = (fastify, opts, done) => {
  fastify.get('/', handlerV2);
  fastify.get('/:id', handlerV3);
  done();
};

export default userRoutes;
