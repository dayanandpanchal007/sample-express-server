const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Server running after TeamCity build</h1>')
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
