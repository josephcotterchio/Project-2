const MongoClient = require("mongodb").MongoClient;
const uri ="mongodb+srv://joecotterchio:GeneralAssembly1@cluster0.0btoh.azure.mongodb.net/sei-joe?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const db = mongoose.connection;
db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on("err", function () {
  console.log("Mongo has thrown an error", err);
});
