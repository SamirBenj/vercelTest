const express = require('express');
const app = express();
const PORT = process.env.PORT || 8085;


app.use(express.urlencoded());


app.get('/', function (req, res) {
    res.sendFile('/index.html', { root: __dirname });
});

app.post('/testAction.html', function (req, res) {
    res.send('Welcome boyuyyy');
});
app.listen(PORT, function () {
    console.log('server is running for IFAR !!');
});
