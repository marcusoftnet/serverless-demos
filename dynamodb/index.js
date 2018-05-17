const ApiBuilder = require('claudia-api-builder')
const AWS = require('aws-sdk')

const api = new ApiBuilder()
const dynamobDb = new AWS.DynamoDB.DocumentClient()

api.post('/icecreams', (request) => {
  const params = {
    TableName: 'icecreams',
    Item: {
      icecreamid: request.body.icecreamId,
      name: request.body.name
    }
  }
  return dynamobDb.put(params).promise() // returns a promise from the api
}, {success: 201})

api.get('/icecreams', (request) => {
  return dynamobDb
    .scan({TableName: 'icecreams'})
    .promise()
    .then(response => response.Items)
})

module.exports = api
