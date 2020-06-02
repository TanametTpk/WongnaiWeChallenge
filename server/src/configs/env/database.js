/*
  if you use docker and connect mongodb with link, it's work fine
  you can set DB_USER , DB_PASSWORD for authentication in mongodb
  
  if you use docker-compose or kubernetes or external ip
  set mongodb url with DB_SERVICE
  you can set specific port with DB_PORT
  and can add user and password in same way as docker
  if you just use in localhost you don't have to set anything
  
*/

module.exports = {

    protocol: process.env.USE_SRV ? "mongodb+srv" : "mongodb",
  
    hostname: process.env.DB_HOST_PORT_27017_TCP_ADDR || process.env.DB_SERVICE || "localhost",
  
    port: process.env.DB_HOST_PORT_27017_TCP_PORT || process.env.DB_PORT || "27017",
  
    database_name: process.env.DB_NAME || "test",
  
    username: process.env.DB_USER || "",
  
    password: process.env.DB_PASSWORD || "",
  
    rewrite: process.env.DB_REWRITE
  
  }