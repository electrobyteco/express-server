const router = require("express").Router();
const authenticated = require("../middleware/authenticated");
const { success, error } = require("../services/response");

router.get("/", (req, res) => {
  try {
    success(res, "Hello World");
  } catch (e) {
    error(res, e);
  }
});

router.get("/a", authenticated, (req, res) => {
  success(res, "Hi");
});

module.exports = router;
