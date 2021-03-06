/*
 * @Descripttion: 
 * @version: 
 * @Author: Zhonglai Lu
 * @Date: 2019-09-03 06:07:46
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-11-25 15:45:15
 */
module.exports = {
  type: 'blog',
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: '分类' // 默认 “分类”

    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: '标签' // 默认 “标签”
    }
  },
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'it_rare',
  // 备案号
  record: '****',
  // 项目开始时间
  startYear: '2020',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  }
}