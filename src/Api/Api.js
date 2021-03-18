import axios from 'axios'
import fakeApi from './fakeApi'

const deepFreeze = (object) => {
  const propNames = Object.getOwnPropertyNames(object)

  for (const name of propNames) {
    const value = object[name]

    if (value && typeof value === 'object') {
      deepFreeze(value)
    }
  }

  return Object.freeze(object)
}

const getCustomErr = (err) => {
  return {
    message: err?.message,
    status: err?.['response.status'] || 0,
    statusText: err?.['response.statusText'] || 'Error',
    data: err?.['response.data'] || {},
  }
}

let instance = {}

const get = (url, params) => {
  return instance.get(url, { params }).catch((err) => {
    throw getCustomErr(err)
  })
}

const Api = {
  init: async (config = {}) => {
    return new Promise((resolve, reject) => {
      if (config.baseURL !== undefined) {
        instance = axios.create({
          baseURL: config.baseURL,
        })
      } else {
        throw new Error('baseURL undefined')
      }

      try {
        resolve()
      } catch (err) {
        reject(err)
      }
    })
  },

  getGlossary: async (glossaryId) => {
    await get(`/`, { glossaryId }).then((res) => res.data)
    await fakeApi(100)
    return glossaryId
  },
}

deepFreeze(Api)

export default Api
