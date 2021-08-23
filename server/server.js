const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 8080;

app.use(express.static(publicPath));
app.listen(port, () => {
   console.log('Server is up on port ' + port);
});