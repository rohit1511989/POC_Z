const express = require('express');
const bodyParser = require('body-parser');
const paginate = require('jw-paginate');
var cors = require('cors');
const app = express();
var fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const router = express.Router();

var fileRead = fs.readFileSync('./vehicleList.json');
var jsonData = JSON.parse(fileRead);


// app.get('/', (req, res, next) => {
//     res.send(jsonData);
// });

// app.get('/vehicle', (req, res, next) => {
//     // url vehicle?pageSize=5&pageIndex=2
//     let limit = req.query.pageSize;
//     let page = req.query.pageIndex;

//     var data = jsonData.filter((val, index) => {
//         var end = (page * limit) -1;
//         var start = end - (limit - 1);
//         return index >= start && index <= end ;
//  });
    
//     res.send(data);
// });

app.get('/api/items', (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    console.log(page);
    const pageSize = 5;
    const pager = paginate(jsonData.length, page, pageSize);
    const pageOfItems = jsonData.slice(pager.startIndex, pager.endIndex + 1);
    return res.json({ pager, pageOfItems });
});


app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(3002);