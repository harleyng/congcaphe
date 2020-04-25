const config = require("./config-local.json");
const MongoClient = require('mongodb').MongoClient;

const url = config.mongoPath;
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connect correctly to the server")
    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
