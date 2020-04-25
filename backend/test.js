const config = require("./config-local.json");
const MongoClient = require("mongodb").MongoClient;

const url = config.mongoPath;
const client = new MongoClient(url);

const dbName = "product";

async function run() {
    try {
        await client.connect();
        console.log("Server connected succesfully");
        const db = client.db(dbName);

        const col = db.collection("menu");

        const fileData = await col.findOne();

        console.log(fileData);
    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
// unknown err.stack, consile.dir