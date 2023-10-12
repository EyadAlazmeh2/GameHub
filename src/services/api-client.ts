import axios, {CanceledError} from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '1193e8b5f3424ba1a2d7396aa74a2214'
  }
})

export { CanceledError }