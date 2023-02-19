const fs = require('fs');

  const data = fs.readFileSync('news.txt', 'utf8');
  console.log(data);

var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze(data);
console.dir(result);  