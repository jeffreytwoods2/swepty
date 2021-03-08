const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes/htmlRoutes")(app);

// Listener

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
});