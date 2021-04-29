const express = require('express');
const serverless = require('serverless-http');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        'hello': 'hi'
    });


});


app.use('/.netlify/functions/api', router);
// app.listen('8058', function () {
//     console.log('is runnin');
// });

module.exports.handler = serverless(app);