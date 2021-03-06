/*
 * @Descripttion:
 * @version:
 * @Author: Zhonglai Lu
 * @Date: 2019-09-03 06:07:46
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-12-04 14:44:15
 */

const themeConfig = require('./config/theme')
const plugins = require('./config/plugins')

module.exports = {
  title: '来弟有话说',
  description:'公众号『来弟有话说』 前端的爱好者，不定时分享前端技术原理解析',
  dest: "dist",
  head: [
    // 网页标签栏图标
    ['link', { rel: 'icon', href: '/vuepress/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css' }],
    
    // 移动栏优化
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    
    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    }],

    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"
    }],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"
    }],

    // 引入鼠标点击脚本
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }],

    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/live2d/autoload.js"
    }],
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true,
  },
  plugins,
}