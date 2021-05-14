const validCategory = {
  body: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      visibility: {
        type: 'string',
      },
    },
    required: ['name', 'visibility'],
  },
};

export { validCategory };
