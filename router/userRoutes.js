const handlerV2 = (req, res) => {
  res.send({ ok: true, msg: 'It works fuckers' });
};

const handlerV3 = async (req) => {
  const { id } = req.params;
  return { ok: true, msg: `It works fuckers 3${id}` };
};

const createUser = async (req) => ({ ok: true, msg: 'It works fuckers 3', body: req.body });

const userRoutes = (fastify, opts, done) => {
  fastify.get('/', handlerV2);
  fastify.post('/', createUser);
  fastify.get('/:id', handlerV3);
  done();
};

export default userRoutes;
