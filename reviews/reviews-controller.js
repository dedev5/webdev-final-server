import * as dao from "./reviews-dao.js"
import {findUserById} from "../users/users-dao.js";

const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body
        const currentUser = req.session['currentUser']
        review.author = currentUser._id
        const actualReview = await dao.createReview(review)
        res.json(actualReview)
    }
    const deleteReview = async (req, res) => {
        const rid = req.params.rid
        const status = await dao.deleteReview(rid);
        res.json(status);
    }
    const findAllReviews = async (req, res) => {
        const reviews = await dao.findAllReviews()
        res.json(reviews)
    }
    const findReviewsByCourse = async (req, res) => {
        const courseId = req.params.cid
        const reviews = await dao.findReviewsByCourse(courseId)
        console.log(reviews)
        res.json(reviews)
    }
    const findReviewsByUser = async (req, res) => {
        const author = req.params.uid
        const reviews = await dao.findReviewsByUser(author)
        res.json(reviews)
    }
    app.post('/api/reviews', createReview)
    app.get('/api/reviews', findAllReviews)
    app.delete('/api/reviews/:rid', deleteReview)
    app.get('/api/courses/:cid/reviews', findReviewsByCourse)
    app.get('/api/users/:uid/reviews', findReviewsByUser)
}
export default ReviewsController