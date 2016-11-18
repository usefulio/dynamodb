# Put an Item to DynamoDB

```js
const put = require('@useful/dynamodb').put;

put('my-ddb-table', objectIWantStored); // returns a promise
```

# Get an Item from DynamoDB

```js
const get = require('@useful/dynamodb').get;

get('my-ddb-table', { YourHashKeyName: "YourItemsHashKeyValue" }); // returns a promise
```

# Delete an Item from DynamoDB

```js
const remove = require('@useful/dynamodb').remove;

remove('my-ddb-table', { YourHashKeyName: "YourItemsHashKeyValue" }); // returns a promise
```

# Update an Item in DynamoDB

```js
const update = require('@useful/dynamodb').update;

update('my-ddb-table', { YourHashKeyName: "YourItemsHashKeyValue" }, { /* Your update expression */ }, { /* Your expression attribute values */ }, /* ReturnValues string */ ); // returns a promise
```

# Query a DynamoDB

```js
const query = require('@useful/dynamodb').query;

var params = {
    TableName : "Movies",
    KeyConditionExpression: "#yr = :yyyy",
    ExpressionAttributeNames:{
        "#yr": "year"
    },
    ExpressionAttributeValues: {
        ":yyyy":1985
    }
};

query(params); // returns a promise
```