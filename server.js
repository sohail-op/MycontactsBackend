const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./config/dbConnection.js");
const dotevn = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.port || 5000;

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));

app.get("/", (req, res) => {
  res.send("Welcome to the Contact Manager API!");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
