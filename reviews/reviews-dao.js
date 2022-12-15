import reviewsModel from "./reviews-model.js";

export const createReview = (review) =>
    reviewsModel.create(review)

export const deleteReview = (rid) =>
    reviewsModel.deleteOne({_id: rid})

export const findAllReviews = () =>
    reviewsModel.find()
        .populate('course')
        .populate('author')
        .exec()

export const findReviewsByCourse = (cid) =>
    reviewsModel
        .find({course: cid})
        .populate('course')
        .populate('author')
        .exec()

export const findReviewsByUser = (uid) =>
    reviewsModel
        .find({uid})
        .populate('course')
        .populate('author')
        .exec()
