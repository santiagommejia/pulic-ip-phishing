
import * as functions from 'firebase-functions';

export const getWelcomeDescription = functions.https.onCall((data, context) => {
  const ip = context.rawRequest.headers['x-forwarded-for'] || context.rawRequest.connection.remoteAddress;
  functions.logger.info(`User IP address: ${ip}, time: ${new Date().toISOString()}`);
  return;
});
