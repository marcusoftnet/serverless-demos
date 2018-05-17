const ApiBuilder = require('claudia-api-builder')
const api = new ApiBuilder()
const superb = require('superb')

api.get('/greet', (request) => {
  console.log(request)
  const suffix = superb()
  return `${request.queryString.name}! You are ${suffix}!`
})

module.exports = api
