import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.1.5:3333'
})

const apiIBGE = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
})

export { api, apiIBGE } 