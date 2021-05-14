import model from '../models';

async function addItems(request, reply) {
  try {
    const {
      name,
      description,
      images,
      qty_exists,
      qty_left,
      qty_sold,
      type,
      pricing_type,
      sell_type,
      button_color,
      button_text,
    } = request.body;

    const item = await model.items.create({
      name,
      description,
      images,
      type,
      business_id: request.business.business_id,
      pricing_type,
      sell_type,
      button_color,
      button_text,
    });
    console.log('item', item);
    const result = await model.categories.findAll({
      where: {
        deleted_at: null,
      },
    });
    // console.log('res', result);
    result.forEach(async (elem) => {
      // console.log('item', elem.dataValues.uuid);
      if (!elem.dataValues.uuid) {
        reply.send('Resource not found');
      }

      const docs = {
        item_id: item.dataValues.uuid,
        category_id: elem.dataValues.uuid,
      };

      const savedItemCategory = await model.item_categories.create(docs);

      // console.log('join table', savedItemCategory);
      return savedItemCategory;
    });

    return reply.code(200).send({
      status: true,
      message: 'Item created successfully',
      data: item,
    });
  } catch (error) {
    console.log('error offor', error);
    reply.code(500).send({
      status: false,
      message: error.message,
    });
  }
}

export { addItems };
