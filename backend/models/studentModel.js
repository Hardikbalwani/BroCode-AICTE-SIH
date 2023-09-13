const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        courses: [
            {
                type: String, 
                required: true,
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
