```javascript
const query = { name: { $regex: 'pattern', $options: 'i' } }; // Use $regex and $options
db.collection('myCollection').createIndex( { name: 'text' } ); // Add a text index
const cursor = db.collection('myCollection').find(query);
cursor.forEach(doc => {
  // Process each document
  console.log(doc);
});
```