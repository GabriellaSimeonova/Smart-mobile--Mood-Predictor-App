const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    image:{
        type: Buffer,
        required: true,
    },
    moodName:{
        type:String,
        required: true,
    },
    date:{
        type:String,
        required:true,
    }
})

const Image = mongoose.model("Image",ImageSchema);
module.exports = Image;