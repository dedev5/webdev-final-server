import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema({
    review: String,
    score: {type: Number, enum: [1,2,3,4,5]},
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CourseModel'
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
}, {collection: 'reviews'})
export default reviewsSchema