const express = require('express');
// require('./config/db').connect();
const app = express();
app.use(express.json({limit: '50mb'}));
const PORT = 3000;
const routes = require('./routes/router');


app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})