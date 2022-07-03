import Mock from 'mockjs'

export default {
  url: '/api/login',
  method: 'get',
  response: () => {
    return {
      code: 200,
      message: 'ok',
      data: Mock.mock({
        user: {
          token:'@guid'
        }
      })
    };
  }
}