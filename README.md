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

# Update an Item in DynamoDB

```js
const get = require('@useful/dynamodb').get;

get('my-ddb-table', { YourHashKeyName: "YourItemsHashKeyValue" }, { /* Your update expression */ }, { /* Your expression attribute values */ }, /* ReturnValues string */ ); // returns a promise
```