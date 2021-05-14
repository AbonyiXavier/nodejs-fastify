const fastify = require('fastify')({
  logger: true,
});
fastify.register(require('fastify-cors'), {
  // put options here
});
require('dotenv').config();

fastify.register(require('fastify-multipart'));
fastify.register(require('./routes/index'), { prefix: '/api/v1' });

const start = async () => {
  try {
    const port = process.env.PORT || 3000;
    await fastify.listen(port);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
