import Repository, { baseUrl } from './Repository'

class Payment {
  async getPayments(params) {
    let endPoint = 'payments'
    let access_token = JSON.parse(localStorage.getItem('access_token'))
    let companyInfo = JSON.parse(localStorage.getItem('companyInfo'))

    let paymentsList = await Repository.get(`${baseUrl}/${endPoint}`, {
      params: { ...params },
      headers: {
        Authorization: `Bearer ${access_token}`,
        companySlug: companyInfo?.slug
      }
    })
      .then(response => {
        console.log('payments => ', response.data)
        if (response.data.success) {
          let tableData = response.data.data

          return tableData
        }

        return null
      })
      .catch(err => {
        return null
      })

    return paymentsList
  }

  async getPaymentById(id) {
    let endPoint = 'payments'
    let access_token = JSON.parse(localStorage.getItem('access_token'))
    let companyInfo = JSON.parse(localStorage.getItem('companyInfo'))

    let paymentById = await Repository.get(`${baseUrl}/${endPoint}/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        companySlug: companyInfo?.slug
      }
    })
      .then(response => {
        console.log(response)
        if (response.data) {
          return response.data
        }
      })
      .catch(err => {
        return err
      })

    return paymentById
  }

  async addPayment(data) {
    console.log(data)
    let endPoint = 'payments'
    let access_token = JSON.parse(localStorage.getItem('access_token'))
    let companyInfo = JSON.parse(localStorage.getItem('companyInfo'))

    let ress = await Repository.post(`${baseUrl}/${endPoint}`, data, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        companySlug: companyInfo?.slug
      }
    })
      .then(response => {
        console.log(response)
        if (response.data) {
          return response.data
        }
      })
      .catch(err => {
        return err
      })

    return ress
  }
}

export default new Payment()
