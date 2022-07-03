import {
  post,
  get
} from '../../https'

const login = (params: {
  name: string
}) => post('/api/login', params)

export default {
  login
}