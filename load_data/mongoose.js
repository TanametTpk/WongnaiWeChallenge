const mongoose = require( "mongoose" );
const config = require("./env/database");

var connectWithRetry = function(uri) {
  return mongoose.connect(uri ,{ useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true } , (err) => {

    if (err) {

      console.error('Failed to connect to mongo on startup - retrying in 1 sec', err.message);

      setTimeout(() => {
        connectWithRetry(uri)
      }, 1000);

    }else{
      console.log("connected");
    }

  })
};

module.exports = function() {

  // assign uri
  db_auth = (config.username + config.password).length === 0 ? "" : config.username + ":" + config.password + "@";
  let uri =  config.rewrite ? config.rewrite : (config.protocol + "://" + db_auth + config.hostname + "/" + config.database_name);

  let models = require('./models');

  connectWithRetry(uri)
  mongoose.Promise = global.Promise;
  
  return models

}