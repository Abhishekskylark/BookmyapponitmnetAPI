
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database_Name = process.env.MONGODB_URI
const client = new MongoClient(url);

async function dbconnection() {
    let result = await client.connect();
    let db = result.db(database_Name);
    return db.collection('user_deatils');
}

module.exports = dbconnection;