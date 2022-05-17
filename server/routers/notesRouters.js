const router = require("express").Router();

router.post("/", (req, res) => {
  const body = req.body;
  const { name, description } = req.body;
  console.log(name);
});

module.exports = router;
