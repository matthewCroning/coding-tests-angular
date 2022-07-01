const express = require("express");
const router = express.Router();
const Question = require("../controllers/question");

router.post("/create", Question.create);

router.get("/findAll", Question.findAll);
router.get("/findById/:id", Question.findById);
module.exports = router;