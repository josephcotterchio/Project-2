const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://joecotterchio:GeneralAssembly1!@cluster0.0btoh.azure.mongodb.net/TWFM?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on("err", function () {
  console.log("Mongo has thrown an error", err);
});