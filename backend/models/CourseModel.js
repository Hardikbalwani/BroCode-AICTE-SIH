const mongoose = require('mongoose')
const courseSchema = mongoose.Schema({
    mainTile: {
        type: String,
        required: true
    },

    title: [{
        type: String,
        required: true,
    }],
    desc: [{
        type: String,
        required: true,
    }],

    duration: {
        type: String,
        required: true,
    },


    insturctor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }

},
    {
        timestamps: true,
    });



const Course = mongoose.model("Course", courseSchema);
module.exports = Course;