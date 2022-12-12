import express from 'express'
import cors from 'cors'
import CourseController from "./api/course-controller.js";
import HelloController from "./hello/hello-controller.js";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

// mongoose.connect('mongodb://localhost:27017/cs4550-fa22', options)

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.json())
// ClassesController(app)
// LikesController(app)
// UsersController(app)
// SessionController(app)
// ReviewsController(app)
// FollowsController(app)
HelloController(app);
CourseController(app)
app.listen(process.env.PORT || 4000);