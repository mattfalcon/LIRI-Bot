console.log("the bot is starting");

var Twit = require('twit');
var fs = require('fs');

var config = require('./keys')
console.log('keys')

var T = new Twit(config);

//==============GET==========================
//===========functionality search/tweets ==============
var params = {
    screen_name: "@rangers",
    count: 20,
    lang: 'en',  
}

//================User Input required 'statuses/user_timeline' ============
T.get('statuses/user_timeline', params, gotData);
//gotData function to pull data parameter
function gotData(err, data, response){
    console.log(data);
    var tweets = data.statuses;
    for (var i = 0; i < data.length; i++) {
    console.log(data[i].text, " ", data[i].created_at);
    }
};
