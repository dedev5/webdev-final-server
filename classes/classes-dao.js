import classesModel from "./classes-model.js";

export const findAllMovies = async () => {
    const movies = await classesModel.find()
    return movies
}
export const createMovie = async (movie) => {
    const actualInsertedMovie = await classesModel.create(movie)
    return actualInsertedMovie
}
export const deleteMovie = async (mid) => {
    const status = await classesModel.deleteOne({_id: mid})
    return status
}
export const updateMovie = () => {}