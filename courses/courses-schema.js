import mongoose from "mongoose";

const coursesSchema = mongoose.Schema({
    department: String,
    courseId: String,
    name: {type: String, required: true},
    reviews: {type: Number, default: 0},
    section: Number
}, {collection: 'courses'})

export default coursesSchema