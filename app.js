let express = require('express');
let app = express();
let cors = require('cors')
const path = require("path");

app.use(cors())

app.use('/', express.static(path.join(__dirname, './test/browser')))  // Server only

app.get('/api/test', function (req, res) {
    res.status(200).json('Hello from backend!');
});

app.use((req, res, next) => {                                       // Server only
    res.sendFile(path.join(__dirname, './test/browser', 'index.html'))   // Server only
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
