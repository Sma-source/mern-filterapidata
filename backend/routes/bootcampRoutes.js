const express = require("express");

const router = express.Router();

// @route - /api/v1/bootcamps/
router.route("/").get().post();

// @route - /api/v1/bootcamps/id
router.route("/:id").put().delete();

module.exports = router;
