module.exports = {
  welcomeHandler: async (request, reply) => {
    try {
      return {
        status: true,
        message: 'Welcome to Patronize 💰',
        data: {
          api: 'abeg service',
          version: '1.0',
        },
      };
    } catch (error) {
      console.log('error', error);
    }
  },
};
