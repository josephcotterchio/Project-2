const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // if you have other stuff in here that's totally cool
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;
db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on("err", function () {
  console.log("Mongo has thrown an error", err);
});

module.exports = mongoose;
