const mongoose = require('mongoose');

const MoodSchema = new mongoose.Schema({
    moodName:{
        type: String,
        required: true,
    },
    dateOfRegistration:{
        type:String,
        required:true,
    }
})

const Mood = mongoose.model("Mood",MoodSchema);
module.exports = Mood;