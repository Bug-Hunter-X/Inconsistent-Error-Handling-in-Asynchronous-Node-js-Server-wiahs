const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      // This will throw an error 50% of the time
      if (Math.random() < 0.5) {
        throw new Error('Something went wrong!');
      } else {
        res.send('Hello World!');
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});