// server.js

var REDDIT = require('./reddit/bot');
var MYSQL_HANDLER = require('./database_handler');

var app = require('express')();

var REDDIT_BOT = new REDDIT({ database_handler: new MYSQL_HANDLER() });

console.log(REDDIT_BOT.get_user_info_by_id());

app.listen(3000);
