const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        courses: [
            {
                courseDescription: {
                    type: String,
                    required: true,
                },
            },
        ],
        experiences: [
            {
                type: String,
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
