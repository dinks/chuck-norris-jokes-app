var Client = require('node-rest-client').Client;

var icnbApi = function() {
  var jokeUrl = 'http://api.icndb.com/jokes/random';
  var client = new Client();

  var getJoke = function(cb) {
    client.get(jokeUrl, function(data, response){
      if (typeof cb === 'function') {
        if (data && data['value'] && data['value']['joke']) {
          cb(data['value']['joke']);
        }
      }
    });
  };

  return {
    getJoke: getJoke
  };
};

module.exports = icnbApi();
