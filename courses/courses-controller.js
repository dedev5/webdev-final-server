import * as coursesDao from './courses-dao.js'

const CoursesController = (app) => {

    const createCourse  = async (req, res) => {
        const course = req.body
        const actualCourse = await coursesDao.createCourse(course)
        res.json(actualCourse)
    }
    const findAllCourses = async (req, res) => {
        const coursesInDatabase = await coursesDao.findAllCourses()
        res.json(coursesInDatabase)
    }
    const findCourseById = async (req, res) => {
        const cid = req.params.cid
        const course = await coursesDao.findCourseById(cid)
        res.json(course)
    }
    const updateCourse = async (req, res) => {
        const cid = req.params.cid
        const courseUpdates = req.body
        const status =  await coursesDao
            .updateCourse(cid,courseUpdates);
        res.json(status)
    }
    const deleteCourse = async (req, res) => {
        const cid = req.params.cid
        const status = await coursesDao
            .deleteCourse(cid);
        res.json(status);
    }

    const findCourseByNumber = async (req, res) => {
        const cnumb = req.params.cnumb
        const courses = await coursesDao.findCourseByNumb(cnumb)
        res.json(courses)
    }

    app.post('/courses', createCourse)
    app.get('/courses', findAllCourses)
    app.get('/courses/:cid', findCourseById)
    app.get('/courses/search/:cnumb', findCourseByNumber)
    app.put('/courses/:cid', updateCourse)
    app.delete('/courses/:cid', deleteCourse)
}

export default CoursesController;