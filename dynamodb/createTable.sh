aws dynamodb create-table --table-name icecreams \
  --attribute-definitions AttributeName=icecreamid,AttributeType=S \
  --key-schema AttributeName=icecreamid,KeyType=HASH \
  --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
  --region us-east-1 \
  --query TableDescription.TableArn --output text \
  --profile claudia