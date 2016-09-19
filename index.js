const AWS = require('aws-sdk');
const Promise = require('bluebird');

const documentClient = new AWS.DynamoDB.DocumentClient()
const put = Promise.promisify(documentClient.put, {context: documentClient});

module.exports = {
  put
};