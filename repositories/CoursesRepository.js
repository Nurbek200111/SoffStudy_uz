import Repository, { baseUrl } from './Repository'

class Courses {
    async getCourses() {
        let endPoint = 'swagger/courses/'

        let courseInfo = await Repository.get(`${baseUrl}/${endPoint}`)
            .then(response => {

                return response
            })
            .catch(err => {
                return err.response
            })

        return courseInfo
    }
}

export default new Courses()
