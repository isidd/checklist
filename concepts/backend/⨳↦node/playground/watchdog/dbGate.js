let mongoUri = require('../config.json').env.prod.mongoDbUri
const mongoose = require('mongoose');


// Connection URL
var url =   mongoUri
// Use connect method to connect to the Server

const connectDataBase = async()=>{

    try {
        
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            });

            console.log("DataBase connected Successfully..!")

    } catch (err) {
            console.log(err)
            throw new Error ("Unable to connect to the data base")
    }

    // MongoClient.connect(url, {
    //     useUnifiedTopology: true
    //   }, function(err, db) {
    //   assert.equal(null, err);
    //   console.log("Connected correctly to server");
    
    //   db.close();
    // });
    
}

module.exports = {connectDataBase}