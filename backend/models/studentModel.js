const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    courseEnrolled: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Course",
    }],
    prof_pic: {
        type: String,
        required: true,
        default: "https://static.vecteezy.com/system/resources/previews/014/554/760/original/man-profile-negative-photo-anonymous-silhouette-human-head-businessman-worker-support-illustration-vector.jpg",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }

},
);



const Student = mongoose.model("Student", studentSchema);
module.exports = Student;