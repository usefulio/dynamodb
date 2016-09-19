const AWS = require('aws-sdk');
const Promise = require('bluebird');

const documentClient = new AWS.DynamoDB.DocumentClient()
const put = Promise.promisify(documentClient.put, {context: documentClient});
const get = Promise.promisify(documentClient.get, {context: documentClient});

module.exports = {
  put: function(TableName, Item){
    return put({
      TableName,
      Item
    });
  },
  get: function(TableName, Key){
    return get({
      TableName,
      Key
    });
  }
};