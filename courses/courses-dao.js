import coursesModel from "./courses-model.js";

export const findAllCourses = async () => {
    const courses = await coursesModel.find()
    return courses
}
export const findCourseById = async (cid) => {
    const course = await coursesModel.findOne({_id: cid})
    return course
}

export const findCourseByNumb = async (cnumb) => {
    console.log(cnumb)
    const courses = await coursesModel.find({"name": cnumb})
    console.log(courses)
    return courses
}

export const createCourse = async (course) => {
    const actualInsertedCourse = await coursesModel.create(course)
    return actualInsertedCourse
}
export const deleteCourse = async (cid) => {
    const status = await coursesModel.deleteOne({_id: cid})
    return status
}

export const updateCourse = () => {}