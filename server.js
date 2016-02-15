require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var unirest = require('unirest');

var passengers = [
  {
    id: 0,
    name: 'Elana Lynn',
    phone: '(720)427-2892',
    status: 'good'
  },
  {
    id: 1,
    name: 'Shad Self',
    phone: '(720)381-7716',
    status: 'great'
  },
  {
    id: 2,
    name: 'Bobby Tables',
    phone: '(720)123-4567',
    status: 'bad'
  }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/passengers', function(req, res){
  res.json(passengers);
});

app.get('/passengers/:id', function(req, res){
  res.json(passengers[req.params.id]);
});

app.post('/passengers', function(req, res){
  var id = passengers.length;
  id++;
  passengers.push({
    id: id,
    name: req.body.name,
    phone: req.body.phone,
    status: req.body.status,
    });
  console.log(req.body);
  console.log('Added passenger successfully.');
  res.json(passengers);
});

app.put('/passengers/:id', function(req, res){
  var id = req.params.id;
  passengers[id] = {
    name: req.body.name,
    phone: req.body.phone,
    status: req.body.status
  }
  console.log('Updated passenger successfully.')
  res.json(passengers);
});

app.delete('/passengers', function(req, res){
  var id = req.params.id;
  var i = passengers.indexOf(id);
  console.log('Removed passenger successfully.')
  passengers.pop(i);
  res.json(req.body.name);
});

app.get('/uber', function(req, res){
  var request = unirest.get('https://sandbox-api.uber.com/')
  .header('Accept', 'application/json')
  .send({
    'server_token': process.env.SERVER_TOKEN,
    'latitude': 37.775818,
    'longitude': -122.418028,
  })
  .end(function (res) {
    console.log(res.body);
  });
  console.log('heyo!', request);
  res.send('heyo!', request);
});

app.listen(process.env.PORT, function(){
  console.log('Listening on port 4000')
})
