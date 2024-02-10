const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const dotevn = require("dotenv").config();

const app = express();

const port = process.env.port || 5000;

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes.js"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
