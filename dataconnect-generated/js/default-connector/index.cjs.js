const { CallerSdkTypeEnum, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'hotel-room-reservation',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

