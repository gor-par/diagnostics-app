const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.get("/elenchuk", (req, res) => {
  res.send("barev arev");
});

app.get("/:message", (req, res) => {
  const message = req.params.message;
  res.send(message);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
