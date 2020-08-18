const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const routes = require("./routes");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/creelDB";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("mongoose connection successful");
  }
});




if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("client/build"));
  // Express will serve up the front-end index.html file if it doesn't recognize the route
  app.get('*', function (req, res) {
    const index = path.join(__dirname, 'client/build', 'index.html');
    res.sendFile(index);
  });
}

app.use(passport.initialize());

require("./config/pass")(passport);

app.use("/api/users", users);
app.use(routes);


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
