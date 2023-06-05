import axios from 'axios'

// const baseDomain = process.env.NEXT_PUBLIC_PRODUCTION_BASE_DOMAIN // API for Bank
const baseDomain = 'http://199.192.23.189/' // API for Bank

export const customHeaders = {
  // 'Content-Type': 'application/json',
  Accept: 'application/json'
}

export const baseUrl = `${baseDomain}`

export default axios.create({
  baseUrl,
  headers: customHeaders
})
