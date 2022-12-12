import express from 'express'
import cors from 'cors'
import session from 'express-session'
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

const app = express();
app.use(cors(
    // {
    // credentials: true,
    // origin: 'http://localhost:3000'
    // }
))
app.use(session({
    secret: "foobar",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
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

