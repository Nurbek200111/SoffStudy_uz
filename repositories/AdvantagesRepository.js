import Repository, { baseUrl } from './Repository'

class Advantages {
    async getAdvantages() {
        let endPoint = 'swagger/advantages/'

        let advantagesInfo = await Repository.get(`${baseUrl}/${endPoint}`)
            .then(response => {

                return response
            })
            .catch(err => {
                return err.response
            })

        return advantagesInfo
    }
}

export default new Advantages()
