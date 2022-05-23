const { v4: uuidv4 } = require("uuid");
const router = require("express").Router();
var axios = require("axios");
require("dotenv").config();

router.post("/", (req, res) => {
  console.log("----post endpoing HIT----");
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ errorcode: "Invalid data Format" });
  }
  var data = JSON.stringify({
    collection: "notes",
    database: "NotesDB",
    dataSource: "Cluster0",
    document: {
      Title: `${title}`,
      Description: `${description}`,
      Uuid: uuidv4(),
    },
  });

  var config = {
    method: "post",
    url: `${process.env.INSERTONEURL}`,
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
      return res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/", (req, res) => {
  console.log("Get Endpoint HIT");
  var data = JSON.stringify({
    collection: "notes",
    database: "NotesDB",
    dataSource: "Cluster0",
  });

  var config = {
    method: "post",
    url: `${process.env.FINDURL}`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": `${process.env.APIKEY}`,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      return res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.delete("/:id", (req, res) => {
  var del_ID = req.params.id;
  console.log(del_ID);
  if (!del_ID) {
    return res
      .status(400)
      .json({ errorMessage: "Please Provide Valid Document ID" });
  }
  var data = JSON.stringify({
    collection: "notes",
    database: "NotesDB",
    dataSource: "Cluster0",
    filter: { uuid: `${del_ID}` },
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
      return res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.put("/:id", (req, res) => {
  const { title, description } = req.body;
  var update_ID = req.params.id;
  console.log(update_ID);
  if (!update_ID) {
    return res
      .status(400)
      .json({ errorMessage: "Please Provide Valid Document ID" });
  }
  var data = JSON.stringify({
    collection: "notes",
    database: "NotesDB",
    dataSource: "Cluster0",
    filter: { Uuid: `${update_ID}` },
    update: {
      Title: title,
      Description: description,
      Uuid: update_ID,
    },
  });

  var config = {
    method: "post",
    url: `${process.env.UPDATEONE}`,
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
      return res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
module.exports = router;
