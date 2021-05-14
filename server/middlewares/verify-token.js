import jwt from 'jsonwebtoken';
import model from '../models';

require('dotenv').config();

async function verifyToken(request, reply, next) {
  try {
    const userData = await model.users.findOne({
      where: {
        uuid: '192a543e-b176-4206-9042-3cf97b037b7e', // approved
        // uuid: '710b0b14-7505-4b45-8d1a-811fc8be83ae', // pending
      },
    });
    // console.log('data', userData);
    if (userData.status === 'approved') {
      // call next to advance the request
      await next(request, reply);
    } else if (userData.status === 'pending') {
      return reply.code(401).send({
        status: false,
        message: 'Verify your account before you can proceed',
      });
    } else if (userData.status === 'flagged') {
      return reply.code(401).send({
        status: false,
        message: 'Your account has been flagged, please contact support',
      });
    }
    // if (!request.headers || !request.headers.authorization) {
    //   return reply.code(401).send({
    //     status: false,
    //     message: 'Access Denied',
    //   });
    // }

    // let token = request.headers.authorization;

    // const checkBearer = 'Bearer ';

    // if (token) {
    //   if (token.startsWith(checkBearer)) {
    //     token = token.slice(checkBearer.length, token.length);
    //   }

    //   const { err, decoded } = await jwt.verify(token, process.env.APP_KEY);
    //   if (err) {
    //     reply.code(401).send({
    //       success: false,
    //       message: 'Failed to authenticate',
    //     });
    //   } else {
    //     console.log('value', decoded);
    //     request.user = decoded;
    //     next(request, reply);
    //   }
    // }
  } catch (error) {
    console.log('error', error);
    reply.code(500).send({
      status: false,
      message: error.message,
    });
  }
}
export { verifyToken };
