const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'build')));


app.listen(process.env.PORT || 8080, function() {
    console.log('Listening ' + (process.env.PORT || 8080))
})