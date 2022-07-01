const express = require("express");
const router = express.Router();
const Compiler = require("../compiler/compiler");

router.post("/compile", Compiler.compile);

module.exports = router;