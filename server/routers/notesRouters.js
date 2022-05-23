const router = require("express").Router();
var axios = require("axios");
require("dotenv").config();

console.log(process.env.MONGO);

// router.post("/", (req, res) => {
//   const body = req.body;
//   const { name, description } = req.body;
//   console.log(body.name);
// });
var data = JSON.stringify({
  collection: "notes",
  database: "NotesDB",
  dataSource: "Cluster0",
  filter: { name: "John Sample" },
});

var config = {
  method: "post",
  url: `${process.env.DELETEONE}`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key": `${process.env.APIKEY}`,
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

module.exports = router;
