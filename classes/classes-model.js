import mongoose from "mongoose";
import classesSchema from "./classes-schema.js";

const classesModel = mongoose.model('MovieModel', classesSchema)

export default classesModel