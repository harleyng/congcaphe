const config = require("./config-local.json");
const MongoClient = require('mongodb').MongoClient;

const url = config.mongoPath;
const client = new MongoClient(url);

const dbName = "test";

async function run() {
    try {
        await client.connect();
        console.log("Server conected successfully");
        const db = client.db(dbName);

        const col = db.collection("people");

        let personDocument = {
            "name": { "first": "Alan", "last": "Turing" },
            "birth": new Date(1912, 5, 23), // June 23, 1912                                                                                                                                 
            "death": new Date(1954, 5, 7),  // June 7, 1954                                                                                                                                  
            "contribs": [ "Turing machine", "Turing test", "Turingery" ],
            "views": 1250000
        }

        const p = await col.insertOne(personDocument);
        const myDoc = await col.findOne();

        console.log(myDoc);
    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);