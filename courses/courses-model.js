import mongoose from "mongoose";
import coursesSchema from "./courses-schema.js";

const coursesModel = mongoose.model('CourseModel', coursesSchema)

export default coursesModel