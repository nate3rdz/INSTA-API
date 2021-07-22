const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./api/routes');

app.use(cors());

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.use('/api', routes);