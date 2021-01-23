// eslint-disable-next-line import/no-extraneous-dependencies
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import log from '@dazn/lambda-powertools-logger';

export default async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  log.debug('Event received', event);

  return {
    statusCode: 200,
    body: JSON.stringify(event),
  };
};
