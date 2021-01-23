import { APIGatewayProxyEvent } from 'aws-lambda';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sut from '../src';

chai.use(chaiAsPromised);

const createEvent = require('aws-event-mocks');

describe('index tests', () => {
  let event: APIGatewayProxyEvent;

  beforeEach(() => {
    event = createEvent({
      template: 'aws:apiGateway',
    });
  });

  it('Successfully returns 200 response', async () => {
    // Arrange
    // Act
    const result = await sut(event);

    // Assert
    expect(result.statusCode).eql(200);
  });
});
