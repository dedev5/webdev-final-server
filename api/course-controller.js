
import * as movieDao from "../classes/classes-dao.js";

let result = ['No results received yet']

const CourseController = (app) => {
    const saveCourses = async (req, res) => {
        const courses = req.body
        console.log(courses)
        result = [courses]

        res.send(200)
    }
    const getMovies = async (req, res) => {
        res.send(result)
    }

    app.post('/api/recv-courses', saveCourses)
    app.get('/api/courses', getMovies)
}

export default CourseController