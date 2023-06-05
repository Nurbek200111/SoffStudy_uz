import Repository, { baseUrl } from './Repository'

class Auth {
  async login(data) {
    let endPoint = 'auth/login'

    let login = await Repository.post(`${baseUrl}/${endPoint}`, data)
      .then(response => {
        return response
      })
      .catch(err => {
        return err
      })

    return login
  }
}

export default new Auth()
