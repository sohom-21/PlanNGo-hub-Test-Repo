var request = require('request');

request({
  method: 'POST',
  url: 'https://api.openrouteservice.org/v2/directions/driving-car',
  body: '{"coordinates":[[8.681495,49.41461],[8.686507,49.41943],[8.687872,49.420318]]}',
  headers: {
    'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
    'Authorization': '5b3ce3597851110001cf6248e3c2b93ce282428b80acb2538a7f51ab',
    'Content-Type': 'application/json; charset=utf-8'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});