import cors from "cors";

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: "filmagixx-d7cfaggncqakbfgs.canadacentral-01.azurewebsites.net"
}));

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
