# Unexpected Results with Case-Insensitive Regex Search in MongoDB

This example demonstrates a potential issue with case-insensitive regular expression searches in MongoDB queries.  If the regex isn't carefully crafted or the target field isn't indexed appropriately, the search may yield unexpected results, or a significant performance impact. 

The `bug.js` file shows a query using a case-insensitive regex.  The `bugSolution.js` file provides a corrected version to improve query effectiveness and efficiency.  Please see the file for more details.