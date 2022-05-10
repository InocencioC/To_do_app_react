const express = require("express");
const bodyParser = require ("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(bodyParser.json));
app.use(bodyParser.urlencoded({ extend: true }));
app.get("/", (req, res) => { 
    res.json({ message: "Welcome to react app" });
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}.`);
     });
