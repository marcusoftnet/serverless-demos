> mcd greeeter
> npm init -y
> npm i claudia-api-builder superb -S && npm i claudia -D
> e index.js 
	const ApiBuilder = require('claudia-api-builder')
	const api = new ApiBuilder()
	const superb = require('superb')
	api.get('/greet', (request) => {
  		console.log(request)
  		const suffix = superb()
  		return `${request.queryString.name}! You are ${suffix}!`
	})
	module.exports = api

> package.json > scripts
	"create": "claudia create --region us-east-1 --api-module index --profile claudia",
    	"deploy": "claudia update --profile claudia”

> npm run create
>
> Hit it! 
> Go to Lamda - show log and monitoring