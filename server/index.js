const express = require("express");

const app = express();

app.use(express.json());

app.listen(5000, () => {
  console.log("Server Stateted on port 5000");
});

app.use("/notes", require("./routers/notesRouters"));
