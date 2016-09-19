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