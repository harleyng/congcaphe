const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://admin:13243546@congcaphe-e0q94.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
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
