import {
  addCategory,
  getOneCategory,
  fetchAllCategory,
  editCategory,
  deleteCategory,
} from './category.controller';
import { addItems } from './item.controller';
const { verifyToken } = require('../middlewares/verify-token');
const { businessCheck } = require('../middlewares/business');

module.exports = {
  addCategory: async (request, reply) => {
    await verifyToken(request, reply, addCategory);
    await businessCheck(request, reply, addCategory);
  },
  getOneCategory: async (request, reply) =>
    verifyToken(request, reply, getOneCategory),
  fetchAllCategory: async (request, reply) => {
    try {
      await verifyToken(request, reply, fetchAllCategory);
      await businessCheck(request, reply, fetchAllCategory);
    } catch (err) {
      reply.send(err);
    }
  },
  editCategory: async (request, reply) =>
    verifyToken(request, reply, editCategory),
  deleteCategory: async (request, reply) =>
    verifyToken(request, reply, deleteCategory),

  addItems: async (request, reply) => {
    try {
      await verifyToken(request, reply, addItems);
      await businessCheck(request, reply, addItems);
      console.log('here');
    } catch (err) {
      reply.send(err);
    }
  },
};
