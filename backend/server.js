const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const messageRoutes =
require("./routes/messageRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
express.static(
path.join(__dirname,"../")
)
);

app.use("/api",
messageRoutes);

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

const PORT = 5000;

app.listen(PORT, () => {
console.log(
`Server running on port ${PORT}`
);
});