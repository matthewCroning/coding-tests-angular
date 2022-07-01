const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    name: String,
    description: {
    text: String,  
    examples: [String],
    constraints: [String],
    },
    accepted: Number,
    submitted: Number
});

module.exports = mongoose.model("Question", questionSchema);
