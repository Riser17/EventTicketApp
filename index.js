// app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const eventRoutes = require("./routes/eventRoutes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use("/api/v1/events", eventRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
