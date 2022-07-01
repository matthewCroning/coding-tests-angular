const config = require("../config/dev");
const Question = require("../models/question");

exports.create = function(req, res, next){
    const question = req.body.question;

    const newQuestion = new Question(question);
    newQuestion.save();
    return res.json(newQuestion);
}


exports.findAll = function(req, res, next){

    Question.find().exec(function(err, Allquestions){
        return res.json(Allquestions);
    })

}

exports.findById = function(req, res, next){

    const questionId = req.params.id;

    Question.findById(questionId).exec(function(err, foundQuestion) {
        return res.json(foundQuestion);
    })

}
