import model from '../models';

require('dotenv').config();

async function businessCheck(request, reply, next) {
  try {
    const userData = await model.users.findOne({
      where: {
        uuid: '192a543e-b176-4206-9042-3cf97b037b7e', // approved
        // uuid: '710b0b14-7505-4b45-8d1a-811fc8be83ae', // pending
      },
    });

    if (userData.default_business_uuid === null) {
      const joinData = await model.business_members.findOne({
        where: {
          user_id: userData.uuid,
          //   business_id: '192a543e-b176-4206-9042-3cf97b037b7g',
        },
      });
      //   console.log('join', joinData);
      request.business = joinData;
      console.log(request.business.business_id);
      next(request, reply);
    }
  } catch (error) {
    console.log('error douglas', error);
    reply.code(500).send({
      status: false,
      message: error.message,
    });
  }
}
export { businessCheck };
