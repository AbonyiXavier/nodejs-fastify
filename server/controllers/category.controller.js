import model from '../models';
const Joi = require('joi');

async function addCategory(request, reply) {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      visibility: Joi.string().required(),
    });

    const formError = [];

    const { error, value } = schema.validate(request.body);

    if (error) {
      error.details.forEach(({ message, context }) => {
        formError.push({ label: context.key, message });
      });
      return reply.code(400).send({
        status: false,
        data: { form: formError },
        message: 'form input error',
      });
    }

    const { name, visibility } = value;
    const checkNameExist = await model.categories.findOne({
      where: {
        name,
      },
    });
    if (checkNameExist) {
      return reply.code(400).send({
        status: false,
        message: `Category with this name ${name} already exist `,
      });
    }

    const category = await model.categories.create({
      name,
      visibility,
    });
    return reply.code(200).send({
      status: true,
      message: 'Category created successfully',
      data: category,
    });
  } catch (error) {
    console.log('error', error);
    reply.code(500).send({
      status: false,
      message: error.message,
    });
  }
}

async function getOneCategory(request, reply) {
  try {
    const { uuid } = request.params;
    const result = await model.categories.findOne({
      where: {
        uuid,
        deleted_at: null,
      },
      include: [
        {
          model: model.items,
          as: 'items',
          attributes: [
            'uuid',
            'name',
            'description',
            'images',
            'business_id',
            'qty_exists',
            'qty_left',
            'qty_sold',
            'type',
            'pricing_type',
            'sell_type',
          ],
          through: {
            attributes: [],
          },
        },
      ],
    });
    if (!result) {
      reply.code(400).send({
        status: false,
        message: 'No category found',
      });
    }
    return reply.code(200).send({
      status: true,
      message: 'Single Category fetched successfully',
      data: result,
    });
  } catch (error) {
    reply.code(500).send({
      status: false,
      message: error.message,
    });
  }
}

async function fetchAllCategory(request, reply) {
  try {
    const result = await model.categories.findAll({
      where: {
        deleted_at: null,
      },
      include: [
        {
          model: model.items,
          as: 'items',
          attributes: [
            'uuid',
            'name',
            'description',
            'images',
            'business_id',
            'qty_exists',
            'qty_left',
            'qty_sold',
            'type',
            'pricing_type',
            'sell_type',
          ],
          through: {
            attributes: [],
          },
        },
      ],
    });

    if (result.length === 0) {
      reply.code(400).send({
        status: false,
        message: 'No categories found',
      });
    }
    return reply.code(200).send({
      status: true,
      message: 'Categories fetched successfully',
      data: result,
    });
  } catch (error) {
    reply.code(500).send({
      status: false,
      message: error.message,
    });
  }
}

async function editCategory(request, reply) {
  try {
    const { uuid } = request.params;
    const { name, visibility } = request.body;
    const updated_at = new Date();
    await model.categories.update(
      {
        name,
        visibility,
        updated_at,
      },
      {
        where: {
          uuid,
        },
      }
    );

    const res = await model.categories.findOne({
      where: {
        uuid,
      },
      include: [
        {
          model: model.items,
          as: 'items',
          attributes: [
            'uuid',
            'name',
            'description',
            'images',
            'business_id',
            'qty_exists',
            'qty_left',
            'qty_sold',
            'type',
            'pricing_type',
            'sell_type',
          ],
          through: {
            attributes: [],
          },
        },
      ],
    });
    return reply.code(200).send({
      status: true,
      message: 'Category updated successfully',
      data: res,
    });
  } catch (error) {
    reply.code(500).send({
      status: false,
      message: error.message,
    });
  }
}

async function deleteCategory(request, reply) {
  try {
    const { uuid } = request.params;
    const deleted_at = new Date();
    const result = await model.categories.findOne({
      where: {
        uuid,
      },
      include: [
        {
          model: model.items,
          as: 'items',
          attributes: [
            'uuid',
            'name',
            'description',
            'images',
            'business_id',
            'qty_exists',
            'qty_left',
            'qty_sold',
            'type',
            'pricing_type',
            'sell_type',
          ],
          through: {
            attributes: [],
          },
        },
      ],
    });
    if (result.length === 0) {
      reply.code(400).send({
        status: false,
        message: 'No Resource to delete',
      });
    }
    let deleteValue = result.dataValues.deleted_at;
    deleteValue = deleted_at;
    await model.categories.update(
      {
        deleted_at: deleteValue,
      },
      {
        where: {
          uuid,
        },
      }
    );
    const res = await result.destroy({
      where: {
        uuid,
      },
    });

    return reply.code(200).send({
      status: true,
      message: 'Category deleted successfully',
      data: res,
    });
  } catch (error) {
    reply.code(500).send({
      status: false,
      message: error.message,
    });
  }
}

export {
  addCategory,
  getOneCategory,
  fetchAllCategory,
  editCategory,
  deleteCategory,
};
