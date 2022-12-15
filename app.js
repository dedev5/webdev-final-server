import express from 'express'
import cors from 'cors'
import CourseController from "./api/course-controller.js";
import HelloController from "./hello/hello-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import mongoose from "mongoose";
import UsersController from "./users/users-controller.js";
import CoursesController from "./courses/courses-controller.js";
import session from 'express-session'
import FollowsController from "./follows/follows-controller.js";

mongoose.connect('mongodb://localhost:27017/tuiter')

const app = express()
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

app.use(session({
    secret: 'colud be anything',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(express.json());

HelloController(app);
CoursesController(app)
ReviewsController(app);
UsersController(app);
FollowsController(app);


app.listen(4000);