import {
  post
} from '../../https'

export const login = (params: {
  name: string
}) => post('/auth/login', params)