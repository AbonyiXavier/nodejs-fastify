import {
  addCategory,
  getOneCategory,
  fetchAllCategory,
  editCategory,
  deleteCategory,
  addItems,
} from '../controllers';
const { welcomeHandler } = require('../controllers/welcome.controller');
// const { addItems } = require('../controllers/item.controller');

async function Routes(fastify, options) {
  fastify.get('/', welcomeHandler);
  fastify.post('/category', addCategory);
  fastify.get('/getcategory/:uuid', getOneCategory);
  fastify.get('/allcategory', fetchAllCategory);
  fastify.patch('/editcategory/:uuid', editCategory);
  fastify.delete('/deletecategory/:uuid', deleteCategory);

  fastify.post('/item', addItems);
}

module.exports = Routes;
