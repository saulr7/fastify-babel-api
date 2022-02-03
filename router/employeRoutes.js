const handlerV2 = (req, res) => {
  res.send({ ok: true, msg: 'It works employee' });
};

const handlerV3 = (req, res) => {
  const { id } = req.params;
  res.send({ ok: true, msg: `It works fuckers 3${id}` });
};

const employeeRoutes = (fastify, opts, done) => {
  fastify.get('/', handlerV2);
  fastify.get('/:id', handlerV3);
  done();
};

export default employeeRoutes;
