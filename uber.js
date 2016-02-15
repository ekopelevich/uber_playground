var unirest = require('unirest');

module.exports = {
  unirest.get('https://sandbox-api.uber.com/')
  .header('Accept', 'application/json')
  .send({
    'server_token': process.env.SERVER_TOKEN,
    'latitude': 37.775818,
    'longitude': -122.418028,
  })
  .end(function (res) {
    console.log(res.body);
  });

  // res = req.get(url, params=parameters)
  //
  // data = req.json()
}
