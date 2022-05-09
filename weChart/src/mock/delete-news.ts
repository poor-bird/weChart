import Mock from 'mockjs'

export default Mock.mock({
  'list|20-60': [
    {
      id: '@increment(1)',
      title: '@ctitle',
      content: '@cparagraph',
      add_time: '@date(yyyy-MM-dd hh:mm:ss)'
    }
  ]
})