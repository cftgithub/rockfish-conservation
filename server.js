const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const passport = require("passport");
const db = require("./config/keys").mongoURI;
// const users = require("./routes/api/users");
// const session = require("session");
const app = express();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
require("./config/pass")(passport);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(session({
//   secret: process.env.SALT,
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 24 * 60 * 60 * 1000 }
// })); 


// app.use("/api/users", users);
// app.use(passport.session()); 

app.use(routes);
mongoose
  .connect(db, { useNewUrlParser: true }
    )
  .then(() => console.log("Successful connection to MongoDB"))
  .catch(err => console.log(err));

// require('./config/pass.js')(passport, db.Users);
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
