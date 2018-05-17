curl -H "Content-Type: application/json" -X POST \
  -d '{"icecreamId":"123", "name":"chocolate"}' \
  https://o5ad153y4k.execute-api.us-east-1.amazonaws.com/latest/icecreams

curl -H "Content-Type: application/json" -X POST \
  -d '{"icecreamId":"456", "name":"vanilla"}' \
  https://o5ad153y4k.execute-api.us-east-1.amazonaws.com/latest/icecreams

curl -H "Content-Type: application/json" -X POST \
  -d '{"icecreamId":"789", "name":"hot fudge with extra carmel and cherries on top"}' \
  https://o5ad153y4k.execute-api.us-east-1.amazonaws.com/latest/icecreams