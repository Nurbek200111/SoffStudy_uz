import Repository, { baseUrl } from './Repository'

class Gallery {
    async getGallery() {
        let endPoint = 'swagger/galeriya/'

        let galleryInfo = await Repository.get(`${baseUrl}/${endPoint}`)
            .then(response => {

                return response
            })
            .catch(err => {
                return err.response
            })

        return galleryInfo
    }
}

export default new Gallery()
