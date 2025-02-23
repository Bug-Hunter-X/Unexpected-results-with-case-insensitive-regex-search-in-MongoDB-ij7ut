```javascript
const query = { name: /pattern/i }; // Case-insensitive regex
const cursor = db.collection('myCollection').find(query);
cursor.forEach(doc => {
  // Process each document
  console.log(doc);
});
```